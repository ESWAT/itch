
import * as path from "path";
import {partial} from "underscore";

import noop from "./noop";
import spawn from "./spawn";
import sf from "./sf";

import {EventEmitter} from "events";
import {IProgressListener, IProgressInfo} from "../types/progress";

import mklog from "./log";
const log = mklog("butler");

const fakeNetworkTroubles = (process.env.TCP_OVER_TROUBLED_WATERS === "1");
const showDebug = (process.env.MY_BUTLER_IS_MY_FRIEND === "1");
const dumpAllOutput = (process.env.MY_BUTLER_IS_MY_ENEMY === "1");

let troubleCounter = 0;

interface IButlerOpts {
   emitter: EventEmitter;
   onProgress?: IProgressListener;
}

function parseButlerStatus (opts: IButlerOpts, onerror: (err: Error) => void, token: string) {
  const {onProgress = noop, emitter} = opts;

  if (dumpAllOutput) {
    console.log(`butler: ${token}`); // tslint:disable-line:no-console
  }

  let status: any;
  try {
    status = JSON.parse(token);
  } catch (err) {
    log(opts, `Couldn't parse line of butler output: ${token}`);
  }

  switch (status.type) {
    case "log": {
      if (!showDebug && status.level === "debug") {
        return;
      }
      return log(opts, `butler: ${status.message}`);
    }
    case "progress": {
      if (fakeNetworkTroubles && (opts as any).url && opts.emitter) {
        troubleCounter += Math.random();
        if (troubleCounter > 250) {
          troubleCounter = 0;
          log(opts, "butler: faking network troubles!");
          onerror(new Error("unexpected EOF"));
          emitter.emit("fake-close", {code: 1});
          return;
        }
      }
      return onProgress(status as IProgressInfo);
    }
    case "error": {
      return onerror(status.message);
    }
    default:
      // muffin
  }
}

async function butler (opts: IButlerOpts, command: string, commandArgs: Array<string>): Promise<void> {
  const {emitter} = opts;
  const onerror = (e: Error) => { err = e; };
  let err = null as Error;

  const args = [ "--json", command, ...commandArgs ];

  const onToken = partial(parseButlerStatus, opts, onerror);

  await spawn.assert({
    command: "butler",
    args,
    onToken,
    emitter,
  });
}

interface ICpOpts extends IButlerOpts {
  src: string;
  dest: string;
  resume?: boolean;
}

/* Copy file ${src} to ${dest} */
async function cp (opts: ICpOpts) {
  const {src, dest} = opts;
  const args = [src, dest];
  if (opts.resume) {
    args.push("--resume");
  }

  return await butler(opts, "cp", args);
}

interface IDlOpts extends IButlerOpts {
  url: string;
  dest: string;
}

/* Downloads file at ${url} to ${dest} */
async function dl (opts: IDlOpts) {
  const {url, dest} = opts;
  const args = [url, dest];

  await sf.mkdir(path.dirname(dest));
  return await butler(opts, "dl", args);
}

interface IApplyOpts extends IButlerOpts {
  patchPath: string;
  outPath: string;
  signaturePath: string;
}

/* Apply a wharf patch at ${patchPath} in-place into ${outPath}, while checking with ${signaturePath} */
async function apply (opts: IApplyOpts) {
  const {patchPath, outPath, signaturePath} = opts;
  const args = [patchPath, "--inplace", outPath, "--signature", signaturePath];

  return await butler(opts, "apply", args);
}

interface IUntarOpts extends IButlerOpts {
  archivePath: string;
  destPath: string;
}

/* Extracts tar archive ${archivePath} into directory ${destPath} */
async function untar (opts: IUntarOpts) {
  const {archivePath, destPath} = opts;
  const args = [archivePath, "-d", destPath];

  return await butler(opts, "untar", args);
}

interface IUnzipOpts extends IButlerOpts {
  archivePath: string;
  destPath: string;
}

/* Extracts zip archive ${archivePath} into directory ${destPath} */
async function unzip (opts: IUnzipOpts) {
  const {archivePath, destPath} = opts;
  const args = [archivePath, "-d", destPath];

  return await butler(opts, "unzip", args);
}

/* rm -rf ${path} */
async function wipe (path: string, opts = {} as IButlerOpts) {
  const args = [path];
  return await butler(opts, "wipe", args);
}

/* mkdir -p ${path} */
async function mkdir (path: string, opts = {} as IButlerOpts) {
  const args = [path];
  return await butler(opts, "mkdir", args);
}

/* rsync -a ${src} ${dst} */
async function ditto (src: string, dst: string, opts = {} as IButlerOpts) {
  const args = [src, dst];
  return await butler(opts, "ditto", args);
}

interface IVerifyOpts extends IButlerOpts {
  heal?: string;
}

/* Verifies ${dir} against ${signature}, heals against opts.heal if given */
async function verify (signature: string, dir: string, opts = {} as IVerifyOpts) {
  const args = [signature, dir];
  const {heal} = opts;
  if (heal) {
    args.push("--heal");
    args.push(heal);
  }
  return await butler(opts, "verify", args);
}

async function sanityCheck (): Promise<boolean> {
  try {
    await spawn.assert({
      command: "butler",
      args: ["--version"],
    });
    return true;
  } catch (err) {
    return false;
  }
}

export default {
  cp, dl, apply, untar, unzip, wipe, mkdir, ditto, verify, sanityCheck,
};

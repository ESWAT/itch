
import * as ospath from "path";

import { shell } from "../../electron";

import pathmaker from "../../util/pathmaker";

import { EventEmitter } from "events";
import { ICaveRecord, IManifestAction } from "../../types/db";

interface ILaunchOpts {
  cave: ICaveRecord;
  manifestAction: IManifestAction;
}

export default async function launch(out: EventEmitter, opts: ILaunchOpts) {
  const {cave, manifestAction} = opts;

  const appPath = pathmaker.appPath(cave);
  const fullPath = ospath.join(appPath, manifestAction.path);
  shell.openItem(fullPath);
}

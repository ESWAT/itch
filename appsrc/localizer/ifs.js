
import Promise from 'bluebird'

// asar-aware filesystem module
import fs from 'fs'

export async function readFile (file) {
  return await new Promise((resolve, reject) => {
    fs.readFile(file, {encoding: 'utf8'}, (err, res) => {
      if (err) {
        return reject(err)
      }
      resolve(res)
    })
  })
}

// XXX we can't use fs.access via ASAR, it always returns false
export async function exists (file) {
  try {
    await readFile(file)
  } catch (err) {
    return false
  }
  return true
}

import sf from '../util/sf'
export const writeFile = sf.writeFile
export default {readFile, writeFile, exists}

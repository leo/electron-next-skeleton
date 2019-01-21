import { readdir, Dirent } from 'fs'

/**
 * run NodeJS [fs.readdir](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
 * with option `{ withFileTypes: true }` and resolves with the result which is
 * an array of instances of Class **[fs.Dirent](https://nodejs.org/api/fs.html#fs_class_fs_dirent)**
 */
const readdirAsync = (path: string): Promise<Dirent[]> =>
  new Promise((resolve, reject) => {
    readdir(path, { withFileTypes: true }, (err: Error, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })

export default readdirAsync

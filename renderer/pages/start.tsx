/* Native */
import { Dirent } from 'fs'

/* Packages (from npm) */
import { useEffect, useState } from 'react'

/* Custom */
import readdirAsync from './util.readdirAsync'

const PROJECT_ROOT = `${process.cwd()}`

/**
 * ReactJS custom  hook that reads the given path and returns the content as an
 * array of instances of class fs.Dirent
 * @param path path to read
 */
const usePathReader = (path: string) => {
  const [dirents, setDirItems] = useState<Dirent[]>([])
  useEffect(() => {
    console.log('reading path:', path) //tslint:disable-line
    readdirAsync(path).then(setDirItems)
  }, [path]) // only re run `useEffect` if path changes

  return dirents
}

export default () => {
  const dirents = usePathReader(PROJECT_ROOT)

  return (
    <>
      <code>{PROJECT_ROOT}</code>
      <ol>
        {dirents.map(dirent => (
          <li key={dirent.name}>{dirent.name}</li>
        ))}
      </ol>
    </>
  )
}

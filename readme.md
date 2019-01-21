# Electron + Next.js + Typescript + Prettier/TSLint

**Original**: You can read more about this concept [here](https://leo.im/2017/electron-next).

Forked from the official [electron-next-skeleton][original]. An up to date *boilerplate/example/template* to develop [Electron] apps rendered with [ReactJS] written in [Typescript] by using the awesome dev framework [NextJS]. It also integrates great tools like [tslint] and [prettier].

## Get Started

```bash
yarn install
yarn start
```

### Electron takes forever to install 😒

+ **On Windows**: go to the [electron's releases page][electron-releases] and
download the version listed on the `package.json` file (something like:
`electron-v4.0.1-win32-x64.zip`). Also download the `SHASUMS256.txt` for that
version and rename it like: `SHASUMS256.txt-4.0.1`. Then copy those files into
`$LOCALAPPDATA/electron/Cache` and run `yarn install` again. Now the
`electron-download` process should install electron from there instead of github.
+ **On Linux**: TODO (but should be the same only changing the electron's cache
directory, and downloading the propper build for you linux distribution from the releases
page).

[original]:https://github.com/leo/electron-next-skeleton
[typescript]:https://www.typescriptlang.org/
[reactjs]:https://reactjs.org/
[electron]:https://electronjs.org/
[tslint]:https://palantir.github.io/tslint/
[prettier]:https://prettier.io/
[nextjs]:https://nextjs.org/
[electron-releases]:https://github.com/electron/electron/releases

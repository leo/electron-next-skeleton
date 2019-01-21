const withTypescript = require('@zeit/next-typescript')
module.exports = (phase, { defaultConfig }) => {
  return withTypescript({
    webpack: config =>
      Object.assign(config, {
        target: 'electron-renderer'
      }),
    exportPathMap: () => ({
      '/start': { page: '/start' }
    })
  })
}

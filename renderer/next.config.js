exports.webpack = config => Object.assign(config, {
  target: 'electron-renderer'
})

exports.exportPathMap = () => ({
  '/start': { page: '/start' }
})

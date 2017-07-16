// Native
const path = require('path')
const url = require('url')

// Packages
const {BrowserWindow, app} = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.openDevTools()

  let entry

  if (isDev) {
    entry = 'http://localhost:8000/start'
  } else {
    entry = url.format({
      pathname: path.join(__dirname, './renderer/start/index.html'),
      protocol: 'file:',
      slashes: true
    })
  }

  mainWindow.loadURL(entry)
}

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')
  createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', app.quit)

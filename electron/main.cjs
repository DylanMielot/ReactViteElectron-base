const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1280,
      height: 720
    })

    // PRODUCTION 
    const startURL = `file://${path.join(__dirname, '../dist/index.html')}`

    // DEV
    // const startURL = 'http://localhost:5174'

    win.loadURL(startURL)
    win.removeMenu()
    // win.webContents.openDevTools()
  }

  app.whenReady().then(() => {
    createWindow()
  })
const { app, BrowserWindow , Menu} = require('electron')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1300,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js')
    }
  })
  win.loadURL('https://admin-apollo4.dev.cogoport.io/v2/en/login?redirect_path=%2Fcogo-one%2Fomni-channel')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
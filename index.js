const { app, shell, BrowserWindow } = require('electron')
try {
    require('electron-reloader')(module)
} catch (_) {}

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true
    }
  })

  win.loadFile('index.html')
}



app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


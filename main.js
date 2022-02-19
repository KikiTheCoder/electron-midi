const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")


const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
          nodeIntegration: true,
          devTools: true,
          preload: path.join(__dirname, "preload.js")
      },
    })
    
    win.setAutoHideMenuBar(true)
    win.setMenuBarVisibility(false)
    win.maximize()
    win.loadFile('index.html')
    input.on("message", (delta, msg) => {
        console.log(`m: ${msg}`);
        win.webContents.send("receive-midi", msg)
    })
}

const midi = require("midi")

const input = new midi.Input()
const output = new midi.Output();

console.log(input.getPortCount());
console.log(input.getPortName(1));

input.openPort(1);
output.openPort(1);

app.whenReady().then(() => {
    createWindow()

    ipcMain.on("send-midi", (event, msg) => {
        output.send(msg)
    })
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
    input.closePort()
})
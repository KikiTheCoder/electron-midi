const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("midi_api", {
    sendMidi: (msg) => ipcRenderer.send("send-midi", msg),
    receiveMidi: (callback) => ipcRenderer.on("receive-midi", callback)
})
,
contextBridge.exposeInMainWorld("voicemeeter_api", {
    setGain: (gain) => ipcRenderer.send("setGain", gain)
})

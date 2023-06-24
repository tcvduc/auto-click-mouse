const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  hello: () => console.log("Hello From Preload.js"),
  ping: () => ipcRenderer.invoke("ping"),
  helloFromPreload: () => ipcRenderer.invoke("helloFromPreload"),
  // we can also expose variables, not just functions
});

const electron = require("electron");
// Import BrowserWindow using Electron remote
const BrowserWindow = electron.remote.BrowserWindow;

const win = BrowserWindow.getFocusedWindow();
// let win = BrowserWindow.getAllWindows()[0];

let disable = document.getElementById("disable");
disable.addEventListener("click", (event) => {
  win.setIgnoreMouseEvents(true);
});

let forward = document.getElementById("forward");
forward.addEventListener("mouseenter", () => {
  console.log("Mouse Entered the Region...Disabling Click");
  win.setIgnoreMouseEvents(true, { forward: true });
});

forward.addEventListener("mouseleave", () => {
  console.log("Mouse Left the Region...Event Emitted");
  win.setIgnoreMouseEvents(false);
});

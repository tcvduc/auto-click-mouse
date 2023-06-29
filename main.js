const { app, BrowserWindow, ipcMain, ShareMenu } = require("electron");
const path = require("path");

const preloadPath = path.join(__dirname, "preload.js");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: preloadPath,
    },
  });

  // click through app to desktop
  win.setIgnoreMouseEvents(true);

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  ipcMain.handle("helloFromPreload", () => "Reply from main");
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 720, // 
    height: 1280, // 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Optional: If you have a preload script
      nodeIntegration: true, // Enable nodeIntegration if needed
    },
    resizable: true, // Allow user to resize the window
  });

  // Load your application's entry point (adjust if necessary)
  win.loadURL('http://localhost:5173'); // URL for Vite dev server

  // Uncomment to open developer tools automatically
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
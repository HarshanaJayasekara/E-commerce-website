const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // ✅ Adds a preload script
      nodeIntegration: true, // ✅ Allows Electron renderer to access Node.js
      contextIsolation: false, // ✅ Prevents security restrictions
    },
  });

  // Load the React-rendered page correctly
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY); // ✅ Uses Webpack entry instead of direct file path

  // Open DevTools (only for development)
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
};

// Initialize the app
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

console.log('Main process loading...')

const electron = require("electron");
const loki = require("lokijs");
const path = require("path");
const url = require("url");
const ipcMain = electron.ipcMain
const dialog = electron.dialog
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow;
var dbCurrency = new loki('cryptoCurrency.json');
var cryptoCurrency = dbCurrency.addCollection('cryptoCurrency');

function createWindow(){
    mainWindow = new BrowserWindow();
    
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

	return mainWindow.id
}
    
ipc.on('invokeAction', function(event, data){
    var result=getCurrencyData(data);
    event.sender.send('actionReply', result);
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});
const electron=require("electron")
const app=electron.app
const window=electron.BrowserWindow
var mainWindow=null

const path = require('path')
const url = require('url')

let createWindow=(w,fileURL,width,height)=>{
    w=new window({width:width,height:height})
    w.loadURL(url.format({
        pathname: path.join(__dirname, ),
        protocol: 'file:',
        slashes: true
    }))
}
app.on('ready',createWindow(mainWindow,'/views/index.html',"1024","768"))
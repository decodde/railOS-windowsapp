"use strict"
const electron=require("electron")
const app=electron.app
const window=electron.BrowserWindow
let mainWindow=null
let splash=null
const path = require('path')
const url = require('url')
let fileURL="/views/splashscreen.html"

function createWindow(){
    splash=new window({width:400,height:300,frame:false})
    splash.loadURL(url.format({
        pathname: path.join(__dirname, fileURL),
        protocol: 'file:',
        slashes: true
    }))
    mainWindow=new window({width:1024,height:768,show:false})
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, "/views/index.html"),
            protocol: 'file:',
            slashes: true
        }))
    setTimeout(() => {
        splash.destroy()
        mainWindow.show()
    }, 6000);
    
    
}
app.on('ready',createWindow)

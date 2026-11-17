const {app,BrowserWindow,ipcMain,dialog}=require('electron');
app.whenReady().then(()=>{const w=new BrowserWindow({width:1320,height:880,backgroundColor:'#141418',autoHideMenuBar:true,webPreferences:{nodeIntegration:true,contextIsolation:false}});w.loadFile('index.html')});
ipcMain.handle('open',async(e,o)=>(await dialog.showOpenDialog(o)).filePaths);
app.on('window-all-closed',()=>app.quit());

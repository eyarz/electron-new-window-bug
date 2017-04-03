const path = require('path');
let electronSrc = path.join(__dirname, 'node_modules/electron/dist')
let electronExec = (/^win/.test(process.platform)) ? path.join(electronSrc, 'electron.exe') : path.join(electronSrc, 'electron.sh')
console.log('electron executable : ' + electronExec)

const exec = require('child_process').execFile;

(() => {
    exec(electronExec, ['./'], function(err, data) {
        if (err) new Error(err)
        console.log(data.toString());
    });
})()

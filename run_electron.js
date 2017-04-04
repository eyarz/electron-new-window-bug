"use strict";

const path = require('path');
const fs = require('fs');
const exec = require('child_process').execFile;

let electronSrc = path.join(__dirname, 'node_modules/electron/dist');
let electronExec = (/^win/.test(process.platform)) ? path.join(electronSrc, 'electron.exe') : path.join(electronSrc, 'Electron.app/Contents/MacOS/Electron');
console.log('electron executable : ' + electronExec);

(() => {
    exec(electronExec, ['./'], function(err, data) {
        if (err) new Error(err);
        console.log(data.toString());
    });
})();
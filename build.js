'use strict';

const child_process = require('child_process');
const path = require('path');


if (['darwin', 'linux', 'win32'].indexOf(process.platform) === -1) {
    console.error('Unknown architecture.');
    process.exit();
}

const ext = process.platform === 'win32' ? '.exe' : '';
const filename = `tweego_${process.platform}_${process.arch}${ext}`;

child_process.spawn(path.join('.', 'bin', filename),
    [
        '-o',
        './dist/game.html',
        './src'
    ],
    {stdio: 'inherit'});

import chalk from 'chalk';
import fse from 'fs-extra';
import { join } from 'path';
import config from './config';
const { README_TEXT } = config;
const { dist_path } = config.paths;

// Add some stuff to clear dist
// Then copy the client dist and server dist into the dist folder.
function cleanDistFolder() {
    if (dist_path.endsWith('dist')) {
        fse.emptyDirSync(dist_path);
        return true;
    } else {
        console.log(chalk.red.bold('!!! Aborting build... the dist folder should be named "dist" this is to prevent the accidental deletion of sensitive files !!!'))
        return false;
    }
}

function addReadme() {
    const ws = fse.createWriteStream(dist_path + "/README.md");
    ws.write(README_TEXT);
    ws.close();
}

async function start() {
    cleanDistFolder();
    addReadme();
}

start();
const args = process.argv;
import chalk = require('chalk');
import childProcess = require('child_process')
import { join } from 'path';
import config from "./client_config"
const {client_devmode_command, server_devmode_command} = config.commands;

function errorMessage(command_type: string, command: string) {
    console.log(chalk.red.bold('ERROR:') + `The ${command_type} command: '${command}' was unable to execute!`)
}

function startDevClient() {
    const devClient = childProcess.exec(client_devmode_command, {cwd: join(__dirname, 'client')}).on("error", () => {
        errorMessage("client devmode", client_devmode_command);
    })
    devClient.stdout?.on('data', (data: string) => {
        console.log(chalk.green(chalk.bold("CLIENT: ") + data));
    })
}

function startDevServer() {
    const devServer = childProcess.exec(server_devmode_command, {cwd: join(__dirname, 'server')});
    devServer.stdout?.on('data', (data: string) => {
        console.log(chalk.yellow(chalk.bold("SERVER: ") + data));
    })
    
}

for(let i = 0; i < args.length; i++) {
    const curr_arg = args[i];
    if(curr_arg === "--development" || curr_arg === "-D") {
        startDevClient();
        startDevServer();
    }
    else if(curr_arg === "--production" || curr_arg === "-P") {
        // Do production stuff in here... coming eventually.
    }
}
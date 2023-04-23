const {REST, Routes} = require('discord.js');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const {token, clientId} = process.env

const commands = [];

const commandsPath = path.join(__dirname, 'commands');
const commandsFolders = fs.readdirSync(commandsPath);
for (const folder of commandsFolders) {
    const folderPath = path.join(commandsPath, folder)
    const commandsFile = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'))
    for (const file of commandsFile) {
        const filePath = path.join(folderPath, file)
        const command = require(filePath)
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON())
        };
    };
};

const rest = new REST({version: 10}).setToken(token);

(async ()=> {
    console.log(`Iniciando deploy de ${commands.length} comandos (/)`)
    try {
        const data = await rest.put(
            Routes.applicationCommands(clientId),
            {body: commands},
        );
        console.log(`Deploy de ${commands.length} comandos (/) feito com sucesso!`)
    } catch (error) {
        console.error(error)
    }
})();

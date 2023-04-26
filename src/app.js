const {Client, GatewayIntentBits, Collection} = require('discord.js');
require('dotenv').config();
const path = require('path');
const fs = require('fs');

const {token} = process.env

const client = new Client({intents: GatewayIntentBits.Guilds});
client.commands = new Collection();

const functionsPath = path.join(__dirname, 'functions')
const functionsFolders = fs.readdirSync(functionsPath)

for (const folder of functionsFolders) {
    const foldersPath = path.join(functionsPath, folder)
    const functionsFile = fs.readdirSync(foldersPath).filter(file => file.endsWith('.js'));
    for (const file of functionsFile) {
        const filePath = path.join(foldersPath, file) 
        const functions = require(filePath)(client)
    }
};

client.handleCommands();
client.handleEvents();

client.login(token);
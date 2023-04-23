const {Client, GatewayIntentBits, Collection} = require('discord.js');
require('dotenv').config()
const {token} = process.env

const client = new Client({intents: GatewayIntentBits.Guilds})

client.on('ready', console.log(`${client.user.tag} esta online!`))
client.login(token)
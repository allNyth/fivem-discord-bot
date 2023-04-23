const {SlashCommandBuilder} = require('discord.js');
const { execute } = require('../../events/client/clientReady');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Limpa até 100 mensagens por vez, em um periodo de 14 dias'),
    async execute(interaction) {
        console.log(`Voce usou o clear`)
    }
}
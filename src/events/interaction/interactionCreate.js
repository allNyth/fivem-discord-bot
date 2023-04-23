const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) {
            console.error(`[ERROR]: NAO FOI ENCONTRADO O COMANDO ${interaction.commandName}`)
            return;
        }
        command.execute(interaction)
    }
}
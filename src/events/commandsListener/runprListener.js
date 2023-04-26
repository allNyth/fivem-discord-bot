const { Events, ApplicationCommandPermissionType, EmbedBuilder, Embed } = require('discord.js');
require('dotenv').config();

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'runpr') {
            try {

            } catch (error) {
                console.error(error)
            }
        }
    }
}
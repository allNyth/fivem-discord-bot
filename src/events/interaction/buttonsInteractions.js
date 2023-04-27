const { Events } = require('discord.js');
const { execute } = require('./interactionCreate');
const { mainEmbed, welcomeEmbed } = require('../../models/embeds');
const { mainBtns, welcomeBtns } = require('../../models/buttons');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
     if (interaction.isButton()) {
        const reply = await interaction.deferReply({ephemeral: true});
        switch (true) {
            case interaction.customId === 'welcomeBtn':
                await reply.edit({embeds: [welcomeEmbed], components: [welcomeBtns]})
                break;
        
            default:
                break;
        }
     }
    }
}
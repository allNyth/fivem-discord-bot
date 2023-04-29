const { Events } = require('discord.js');
const { execute } = require('./interactionCreate');
const { mainEmbed, welcomeEmbed } = require('../../models/embeds');
const { mainBtns, welcomeBtns } = require('../../models/buttons');
const {titleModal, descModal, thumbModal} = require('../../models/modals')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isButton()) return;
        try {
            const ar = ['welcomeBtn', 'whitelistBtn', 'ticketBtn', 'connectBtn', 'permissionsBtn']
            if (interaction.isButton() && ar.includes(interaction.customId)) {
                const reply = await interaction.deferReply({ ephemeral: true });
                switch (true) {
                    case interaction.customId === 'welcomeBtn':
                        reply.edit({ embeds: [welcomeEmbed], components: [welcomeBtns] })
                        break;
                    case interaction.customId === 'whitelistBtn':
                        console.log('Whitelist btn')
                        break;
                    case interaction.customId === 'ticketBtn':
                        console.log('ticket btn')
                        break;
                    case interaction.customId === 'connectBtn':
                        console.log('connect btn')
                        break;
                    case interaction.customId === 'permissionsBtn':
                        console.log('permissions btn')
                        break;
                }
            }
        } catch (error) {
            console.error(error)
        }
        try {
            const ar = ['welcomeBtnTitle', 'welcomeBtnDesc', 'welcomeBtnThumb', 'welcomeBtnFields', 'welcomeBtnFooter']
            if (interaction.isButton() && ar.includes(interaction.customId)) {
                switch (true) {
                    case interaction.customId === 'welcomeBtnTitle':
                        await interaction.showModal(titleModal)
                        break;
                    case interaction.customId === 'welcomeBtnDesc':
                        await interaction.showModal(descModal)
                        break;
                    case interaction.customId === 'welcomeBtnThumb':
                        await interaction.showModal(thumbModal)
                        break;
                    case interaction.customId === 'welcomeBtnFields':
                        console.log('WelcomeBtn Fields')
                        break;
                    case interaction.customId === 'welcomeBtnFooter':
                        console.log('WelcomeBtn Footer')
                        break;

                    default:
                        break;
                }
            }
        } catch (error) {
            console.error(error)
        }

    }
}
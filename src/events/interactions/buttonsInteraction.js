const { Events } = require('discord.js');
const { mainEmbed, welcomeEmbed, whitelistEmbed } = require('../../models/embeds');
const { mainBtns, welcomeBtns01, welcomeBtns02, whitelistBtns } = require('../../models/buttons');
const { titleModal, descModal, thumbModal, fieldsModal, footerModal } = require('../../models/modals')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isButton()) return;
        try {
            const ar = ['welcomeBtn', 'whitelistBtn', 'ticketBtn', 'connectBtn', 'permissionsBtn', 'enableTimestamp']
            const ar2 = ['enableTimestamp']
            const customId = await interaction.customId
            if (interaction.isButton() && ar.includes(customId) || ar2.includes(customId)) {
                const reply = await interaction.deferReply({ ephemeral: true });
                switch (true) {
                    case interaction.customId === 'welcomeBtn':
                        reply.edit({ embeds: [welcomeEmbed], components: [welcomeBtns01, welcomeBtns02] })
                        break;
                    case interaction.customId === 'whitelistBtn':
                        reply.edit({embeds: [whitelistEmbed], components: [whitelistBtns]})
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
            const ar = ['welcomeBtnTitle', 'welcomeBtnDesc', 'welcomeBtnThumb', 'welcomeBtnFields', 'welcomeBtnFooter', 'welcomeBtnTest']
            const customId = await interaction.customId
            if (interaction.isButton() && ar.includes(customId)) {
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
                        await interaction.showModal(fieldsModal)
                        break;
                    case interaction.customId === 'welcomeBtnFooter':
                        await interaction.showModal(footerModal)
                        break;
                        case interaction.customId === 'welcomeBtnTest':
                            const member = await interaction.guild.members.cache.random()
                            await interaction.client.emit('guildMemberAdd', member)
                    default:
                        break;
                }
            }
        } catch (error) {
            console.error(error)
        }

    }
}
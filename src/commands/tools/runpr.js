const { SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
require('dotenv').config()
const { token } = process.env
const { mainEmbed } = require('../../models/embeds');
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = {
    data: new SlashCommandBuilder().setName('runpr')
        .setDescription('Inicia o bot PROJETO RP')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const buttons = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('welcomeBtn').setLabel('Boas-vindas 🏠').setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId('whitelistBtn').setLabel('whitelist 📝').setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId('ticketBtn').setLabel('ticket 🎫').setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId('connectBtn').setLabel('connect 🔗').setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId('permissionsBtn').setLabel('Permissoes 🤖').setStyle(ButtonStyle.Danger),
        )
        await interaction.deferReply({ ephemeral: true })
        const reply = await interaction.editReply({ embeds: [mainEmbed], components: [buttons] })
    }
};


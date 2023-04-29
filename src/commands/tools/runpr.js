const { SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder, Component } = require('discord.js');
require('dotenv').config()
const { mainEmbed } = require('../../models/embeds');
const { mainBtns } = require('../../models/buttons')

module.exports = {
    data: new SlashCommandBuilder().setName('runpr')
        .setDescription('Inicia o bot PROJETO RP')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const reply = await interaction.deferReply({ ephemeral: true })
        await reply.edit({ components: [mainBtns], embeds: [mainEmbed] })
    },
};


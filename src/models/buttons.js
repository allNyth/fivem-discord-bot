const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const mainBtns = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('welcomeBtn').setLabel('Boas-vindas 🏠').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('whitelistBtn').setLabel('whitelist 📝').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('ticketBtn').setLabel('ticket 🎫').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('connectBtn').setLabel('connect 🔗').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('permissionsBtn').setLabel('Permissoes 🤖').setStyle(ButtonStyle.Danger),
);
const welcomeBtns01 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('welcomeBtnChannelId').setLabel('ID').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('welcomeBtnTitle').setLabel('Titulo').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('welcomeBtnDesc').setLabel('Descrição').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('welcomeBtnThumb').setLabel('Thumbnail').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('welcomeBtnFields').setLabel('Fields').setStyle(ButtonStyle.Success),
);
const welcomeBtns02 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('welcomeBtnFooter').setLabel('Footer').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('welcomeBtnTest').setLabel('TESTAR').setStyle(ButtonStyle.Primary),

)

// whitelist buttons 
const whitelistBtns01 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('wlSetChannel').setLabel('Definir Canal 💼').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('wlAddQuestion').setLabel('Adicionar pergunta 📝').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('wlRemoveQuestion').setLabel('Remover pergunta 🗑️').setStyle(ButtonStyle.Danger),
    new ButtonBuilder().setCustomId('wlRemoveAll').setLabel('Remover todas ✖️').setStyle(ButtonStyle.Danger),
)
const whitelistBtns02 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('wlQuestionsLength').setLabel('Configurar ⚙️').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('wlSend').setLabel('Enviar 📨').setStyle(ButtonStyle.Success),
)

module.exports = { mainBtns, welcomeBtns01, welcomeBtns02, whitelistBtns01, whitelistBtns02 }
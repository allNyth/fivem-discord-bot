const {ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder} = require('discord.js');



const titleModalInput = new TextInputBuilder().setCustomId('titleModalInput').setLabel('Inisira o titlulo de boas-vindas').setMinLength(1).setMaxLength(256).setStyle(TextInputStyle.Paragraph)
const titleModalAR = new ActionRowBuilder().addComponents(titleModalInput)
const titleModal = new ModalBuilder().setCustomId('titleModal').setTitle('Titulo do embed de boas-vindas').addComponents(titleModalAR)

const descModalInput = new TextInputBuilder().setCustomId('descModalInput').setLabel('Inisira a descrição do embed de boas-vindas').setMinLength(1).setMaxLength(4000).setStyle(TextInputStyle.Paragraph)
const descModalAR = new ActionRowBuilder().addComponents(descModalInput)
const descModal = new ModalBuilder().setCustomId('descModal').setTitle('Descrição do embed de boas-vindas').addComponents(descModalAR)

const thumbModalInput = new TextInputBuilder().setCustomId('thumbModalInput').setLabel('Inisira a thumbnail do embed de boas-vindas').setMinLength(1).setStyle(TextInputStyle.Short)
const thumbModalAR = new ActionRowBuilder().addComponents(thumbModalInput)
const thumbModal = new ModalBuilder().setCustomId('thumbModal').setTitle('thumbnail do embed de boas-vindas').addComponents(thumbModalAR)


module.exports = {titleModal, descModal, thumbModal}
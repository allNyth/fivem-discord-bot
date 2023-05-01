const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');



const titleModalInput = new TextInputBuilder().setCustomId('titleModalInput').setLabel('Inisira o titlulo de boas-vindas').setMinLength(1).setMaxLength(256).setStyle(TextInputStyle.Paragraph).setRequired(false)
const titleModalAR = new ActionRowBuilder().addComponents(titleModalInput)
const titleModal = new ModalBuilder().setCustomId('titleModal').setTitle('Titulo do embed de boas-vindas').addComponents(titleModalAR)

const descModalInput = new TextInputBuilder().setCustomId('descModalInput').setLabel('Inisira a descrição do embed de boas-vindas').setMinLength(1).setMaxLength(4000).setStyle(TextInputStyle.Paragraph)
const descModalAR = new ActionRowBuilder().addComponents(descModalInput)
const descModal = new ModalBuilder().setCustomId('descModal').setTitle('Descrição do embed de boas-vindas').addComponents(descModalAR)

const thumbModalInput = new TextInputBuilder().setCustomId('thumbModalInput').setLabel('Inisira a thumbnail do embed de boas-vindas').setMinLength(1).setStyle(TextInputStyle.Short)
const thumbModalAR = new ActionRowBuilder().addComponents(thumbModalInput)
const thumbModal = new ModalBuilder().setCustomId('thumbModal').setTitle('thumbnail do embed de boas-vindas').addComponents(thumbModalAR)

const fieldsModalTitleInput = new TextInputBuilder().setCustomId('fieldsModalTitleInput').setLabel('Insinar o titulo do field (campo) embed').setMinLength(1).setMaxLength(256).setStyle(TextInputStyle.Short).setRequired(true)
const fieldsModalValueInput = new TextInputBuilder().setCustomId('fieldsModalValueInput').setLabel('Insinar o valor do field (campo) embed').setMinLength(1).setMaxLength(1024).setStyle(TextInputStyle.Paragraph).setRequired(true)
const fieldsModalInlineInput = new TextInputBuilder().setCustomId('fieldsModalInlineInput').setLabel('Inline: true para sim e false para não').setMinLength(4).setMaxLength(5).setStyle(TextInputStyle.Short).setRequired(true)
const fieldsModalTitleAR = new ActionRowBuilder().addComponents(fieldsModalTitleInput)
const fieldsModalValueAR = new ActionRowBuilder().addComponents(fieldsModalValueInput)
const fieldsModalInlineAR = new ActionRowBuilder().addComponents(fieldsModalInlineInput)
const fieldsModal = new ModalBuilder().setCustomId('fieldsModal').setTitle('Fields (campos) do embed de boas-vindas').addComponents(fieldsModalTitleAR, fieldsModalValueAR, fieldsModalInlineAR)

const footerModalInput = new TextInputBuilder().setCustomId('footerModalInput').setLabel('Inisira o footer (rodapé) de boas-vindas').setMinLength(1).setMaxLength(2048).setStyle(TextInputStyle.Paragraph)
const footerModalAR = new ActionRowBuilder().addComponents(footerModalInput)
const footerModal = new ModalBuilder().setCustomId('footerModal').setTitle('footer do embed de boas-vindas').addComponents(footerModalAR)


module.exports = { titleModal, descModal, thumbModal, fieldsModal, footerModal }
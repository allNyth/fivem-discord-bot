const { Events } = require('discord.js');
const { EmbedDataManager } = require('../../controllers/embedController');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isModalSubmit()) return;
        const modals = ['titleModal', 'descModal', 'thumbModal', 'fieldsModal', 'footerModal']
        if (modals.includes(interaction.customId)) {
            const embedManager = new EmbedDataManager(interaction)
            switch (true) {
                case interaction.customId === 'titleModal':
                    const title = await interaction.fields.getTextInputValue('titleModalInput')
                    embedManager.setTitle(title)
                    break;
                case interaction.customId === 'descModal':
                    const desc = await interaction.fields.getTextInputValue('descModalInput')
                    embedManager.setDesc(desc)
                    break;
                case interaction.customId === 'thumbModal':
                    const thumb = await interaction.fields.getTextInputValue('thumbModalInput')
                    embedManager.setThumb(thumb)
                    break;
                case interaction.customId === 'fieldsModal':
                    const fieldsTitle = await interaction.fields.getTextInputValue('fieldsModalTitleInput')
                    const fieldsValue = await interaction.fields.getTextInputValue('fieldsModalValueInput')
                    const fieldsInline = await interaction.fields.getTextInputValue('fieldsModalInlineInput')
                    const field = { title: fieldsTitle, value: fieldsValue, inline: fieldsInline }
                    embedManager.setFields(field)
                    break;
                case interaction.customId === 'footerModal':
                    const footer = await interaction.fields.getTextInputValue('footerModalInput')
                    await embedManager.setFooter(footer)
                    break;
                default:
                    console.log(interaction.customId)
                    break;
            }
        }

    }
}
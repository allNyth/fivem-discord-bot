const { Events } = require('discord.js');
const { ModalRegex } = require('../../controllers/messageRegex')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isModalSubmit()) return;
        const modals = ['titleModal', 'descModal', 'thumbModal']
        if (modals.includes(interaction.customId)) {
            const regex = new ModalRegex()
            switch (true) {
                case interaction.customId === 'titleModal':
                    const value = await interaction.fields.getTextInputValue('titleModalInput')
                    regex.title(value)
                    break;

                default:
                    break;
            }
        }

    }
}
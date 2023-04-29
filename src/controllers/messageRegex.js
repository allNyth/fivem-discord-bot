class ModalRegex {
    constructor() {
    }
    title(title, interaction) {
        const newTitle = title.replace(/!member/g, `${interaction.client.guildName}`)
        return newTitle
    }
}

module.exports = {ModalRegex}
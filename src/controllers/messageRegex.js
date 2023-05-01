class ModalRegex {
    constructor(client) {
    this.client = client
    }
    async title(title) {
        const newTitle = await title.replace(/!member/g, `${this.client.user.username}`).replace(/!guildname/g, `${this.client.guild.name}`).replace(/!count/g, `${this.client.guild.memberCount}`)
        return newTitle
    }
}

module.exports = ModalRegex
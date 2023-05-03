class ModalRegex {
    constructor(client) {
    this.client = client
    }
    async fields(value) {
        const newTitle = await value.replace(/!member/g, `${this.client.user.username}`)
        .replace(/!guildname/g, `${this.client.guild.name}`)
        .replace(/!count/g, `${this.client.guild.memberCount}`)
        return newTitle
    };
    async thumb(thumb) {
        const newThumb = await thumb.replace(/!avatar/g, `${this.client.user.avatarURL()}`)
        return newThumb
    }
}

module.exports = ModalRegex
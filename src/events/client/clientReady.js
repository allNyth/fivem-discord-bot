const { Events } = require('discord.js')

module.exports = {
    name: Events.ClientReady,
    async execute(client) {
        console.log(`${client.user.tag} Esta online!`)
    }
}
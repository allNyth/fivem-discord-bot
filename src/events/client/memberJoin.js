const { Events, EmbedBuilder, embedLength } = require('discord.js');
const path = require('path');
const fs = require('fs');
const Regex = require('../../controllers/messageRegex')
module.exports = {
    name: Events.GuildMemberAdd,
    async execute(client) {
        const welcomeEmbed = new EmbedBuilder()
        const regex = new Regex(client)
        const filePath = path.join(__dirname, '../../config/welcomeEmbed.json')
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const config = JSON.parse(fileContent)
        const { title, desc, thumb } = config
        const channel = client.guild.channels.cache.find(ch => ch.id === `${config.channelId}`)
        if (!channel) return;
        const channelRegex = /^\d{18,21}$/
        if (config.channelId.length > 0 && channelRegex.test(config.channelId)) {
            try {
                if (!title.length > 0 || channelRegex.test(title)) return;
                const regexTitle = await regex.title(title)
                welcomeEmbed.setTitle(regexTitle)
            } catch (error) {
                console.error(error)
            }
            try {
                if (!desc.length > 0) return;
                welcomeEmbed.setDescription(desc)
            } catch (error) {
                console.error(error)
            }
            try {
                if (!thumb.length > 0) return;
                const thumbAccepts = ['!avatar']
                const regex = /^https?:\/\/.+$/
                if (regex.test(thumb) || thumbAccepts.includes(thumb)) {
                    welcomeEmbed.setThumbnail(thumb)
                } else {
                    await channel.send({ content: `Thumbnail invalida, verifique se digitou o link ou o parametro corretamente! \n parametros aceitos: ${thumbAccepts}`, ephemeral: true })
                    return;
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            console.log('Insira o id do canal')
        }
        await channel.send({ embeds: [welcomeEmbed] })
    }
}
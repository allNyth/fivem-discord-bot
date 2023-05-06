const { Events, EmbedBuilder, embedLength } = require('discord.js');
const path = require('path');
const fs = require('fs');
const Regex = require('../../controllers/messageRegex')
module.exports = {
    name: Events.GuildMemberAdd,
    async execute(client) {
        const regex = new Regex(client)
        const welcomeEmbed = new EmbedBuilder()
        const filePath = path.join(__dirname, '../../config/welcomeEmbed.json')
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const config = JSON.parse(fileContent);
        const channel = client.guild.channels.cache.find(ch => ch.id === `${config.channelId}`)
        if (!channel) return console.error(`Canal invalido, por favor, digite o id do canal corretamente`);
        async function embedConstructor() {
            if ('title' in config && config.title.length >= 1) {
                const newTitle = await regex.fields(config.title)
                welcomeEmbed.setTitle(newTitle)
            }
            if ('desc' in config && config.desc.length >= 1) {
                const newDesc = await regex.fields(config.desc)
                welcomeEmbed.setDescription(newDesc)
            }
            if ('thumb' in config) {
                const newThumb = await regex.thumb(config.thumb)
                const urlRegex = /^https?:\/\/.+$/
                const isURL = urlRegex.test(newThumb)
                if (isURL) {
                    welcomeEmbed.setThumbnail(newThumb)
                }
            }
            if ('fields' in config && config.fields.length >= 1) {
                await Promise.all(config.fields.map(async field => {
                    const newTitle = await regex.fields(field.name)
                    const newValue = await regex.fields(field.value)
                    const inline = await field.inline
                    welcomeEmbed.addFields({ name: newTitle, value: newValue, inline: inline })
                }))
            }
            if ('footer' in config && config.footer.length >= 1) {
                const newFooter = await regex.fields(config.footer)
                const guildIcon = await client.guild.iconURL()
                welcomeEmbed.setFooter({text: newFooter, iconURL: guildIcon})
                welcomeEmbed.setTimestamp()
            }
        }
        await embedConstructor()
        await channel.send({ embeds: [welcomeEmbed] })
    }
}
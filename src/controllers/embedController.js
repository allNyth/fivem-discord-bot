const fs = require('fs');
const path = require('path');
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const filePath = path.join(__dirname, "../config/welcomeEmbed.json");
if (!fs.existsSync(filePath)) {
    console.log(`O arquivo de JSON do welcome embed nao foi encontrado... Criando novo arquivo`)
    fs.writeFileSync(filePath, '{}')
    console.log('Arquivo criado com sucesso em ', filePath)
}
const fileContent = fs.readFileSync(filePath, 'utf-8')
let config = JSON.parse(fileContent)



class EmbedDataManager {
    constructor(interaction) {
        this.interaction = interaction
    };
    setTitle(title) {
        if ('title' in config) {
            config.title = title
        } else {
            config = { ...config, title }
        }
        fs.writeFile(filePath, JSON.stringify(config, null, 2), async (err) => {
            if (err) throw err;
            await this.interaction.deferUpdate()
            await this.interaction.followUp({ content: "Titulo adicionado com sucesso", ephemeral: true })
        })
    };
    async setDesc(desc) {
        await this.interaction.deferUpdate();
        if ('description' in config) {
            config.description = desc
        } else {
            config = { ...config, desc }
        }
        fs.writeFile(filePath, JSON.stringify(config, null, 2), async (err) => {
            if (err) throw err;
            await this.interaction.followUp({ content: "Descrição adicionada com sucesso!", ephemeral: true })
        })
    };
    async setThumb(thumb) {
        const thumbAccepts = ['!avatar']
        const regex = /^https?:\/\/.+$/
        if (regex.test(thumb) || thumbAccepts.includes(thumb)) {
            if ('thumbnail' in config) {
                config.thumbnail = thumbnail
            } else {
                config = { ...config, thumb }
            }
            fs.writeFile(filePath, JSON.stringify(config, null, 2), async (err) => {
                if (err) throw err;
                await this.interaction.deferUpdate();
                await this.interaction.followUp({ content: "Thumbnail adicionada com sucesso!", ephemeral: true })
            })
        } else {
            await this.interaction.deferUpdate();
            await this.interaction.followUp({ content: `Thumbnail nao foi adicionada! \n verifique se esta inserindo um link valido ou os parametros aceitos: \n ${thumbAccepts}`, ephemeral: true })
        }
    };
    async setFields(field) {
        await this.interaction.deferUpdate()
        const { title, value, inline } = field
        function inlineCheck(inline) {
            const newInline = inline.toLowerCase()
            if (newInline === 'true') {
                return true;
            } else if (newInline === 'false') {
                return false;
            } else {
                return undefined
            }
        }
        if (inlineCheck(inline) === undefined) {
            await this.interaction.followUp({ content: 'Campo inline incorreto, insira true para verdadeiro e false para falso', ephemeral: true })
        } else {
            const newInline = inlineCheck(inline)
            const newField = { title: title, value: value, inline: newInline }
            if ('fields' in config) {
                if (config.fields.length < 25) {
                    config.fields.push(newField)
                } else {
                    await this.interaction.followUp({ content: 'Limite de 25 campos atingido, exclua algum campo para introduzir um novo', ephemeral: true })
                    return;
                }
            } else {
                config.fields = [newField]
            }
            fs.writeFile(filePath, JSON.stringify(config, null, 2), async (err) => {
                if (err) throw err;
                await this.interaction.followUp({ content: "field adicionado com sucesso! " + config.fields.length, ephemeral: true })
            })

        }
    };
    async setFooter(footer) {
        await this.interaction.deferUpdate()
        if ('footer' in config) {
            config.footer = footer
        } else {
            config = { ...config, footer }
        }
        fs.writeFile(filePath, JSON.stringify(config, null, 2), async (err) => {
            if (err) throw err;
            await this.interaction.followUp({ content: "footer adicionado com sucesso", ephemeral: true })
        })
    };
}
module.exports = { EmbedDataManager }  
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "../../welcomeEmbed.json");
if (!fs.existsSync(filePath)) {
    console.log(`O arquivo de JSON do welcome embed nao foi encontrado... Criando novo arquivo`)
    fs.writeFileSync(filePath, '{}')
    console.log('Arquivo criado com sucesso em ', filePath)
     }
const fileContent = fs.readFileSync(filePath, 'utf-8')
let config = JSON.parse(fileContent)



class EmbedDataManager {
    constructor() {
    };
    setTitle(title) {
        if ('title' in config) {
            config.title = title
        } else {
            config = { ...config, title }
        }
        fs.writeFile(filePath, JSON.stringify(config, null, 2), (err) => {
            if (err) throw err;
            console.log('Titulo atualizado')
        })
    }
}
const embed = new EmbedDataManager()
module.exports = {EmbedDataManager}
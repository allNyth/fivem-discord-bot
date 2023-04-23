const path = require('path')
const fs = require('fs')

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandsPath = path.join(__dirname, '../../commands');
        const commandsFolders = fs.readdirSync(commandsPath);
        for (const folder of commandsFolders) {
            const foldersPath = path.join(commandsPath, folder);
            const commandsFiles = fs.readdirSync(foldersPath).filter(file => file.endsWith('.js'));
            for (const file of commandsFiles) {
                const filePath = path.join(foldersPath, file);
                const command = require(filePath);
                const { commands } = client
                switch (true) {
                    case 'data' in command && 'execute' in command:
                        commands.set(command.data.name, command)
                        break;
                    case 'data' in command:
                        console.error(`[ERROR]: Faltando 'execute' no arquivo de comando ${file}`)
                        break;
                    case 'execute' in command:
                        console.error(`[ERROR]: Faltando 'data' no arquivo de comando ${file}`)
                        break;
                    default:
                        console.error(`[ERROR]: Faltando 'data' e 'execute' no arquivo de comando ${file}`)
                        break;
                }
            }
        }

    }
};
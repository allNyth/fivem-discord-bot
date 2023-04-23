const path = require('path')
const fs = require('fs')

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventsPath = path.join(__dirname, '../../events');
        const eventsFolders = fs.readdirSync(eventsPath);
        for (const folder of eventsFolders) {
            const foldersPath = path.join(eventsPath, folder);
            const eventsFiles = fs.readdirSync(foldersPath).filter(file => file.endsWith('.js'));
            for (const file of eventsFiles) {
                const filePath = path.join(foldersPath, file);
                const event = require(filePath);
                if (event.once) {
                    client.once(event.name, (...args) => event.execute(...args))
                } else {
                    client.on(event.name, (...args) => event.execute(...args))
                }
            }
        }
    }

};
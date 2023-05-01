const { EmbedBuilder } = require('discord.js');


const mainEmbed = new EmbedBuilder().setTitle('Bem-vindo a configuração inicial do ProjetoRP Bot')
    .setDescription('O ProjetoRP bot permite que você configure a mensagem de boas-vindas para um usuario no seu servidor discord, tambem contem configuraçoes de whitelist e ferramenta de ticket criada para te auxiliar no seu servidor discord voltado para fiveM')
    .setFields({ name: `Configure a mensagem de boas-vindas`, value: '```Personalize o sistema de boas-vindas com a opção de editar a mensagem e canal, além de testar o evento de entrada no servidor. Adapte o bot ao seu estilo e receba novos membros com uma mensagem personalizada.```', inline: false },
        { name: 'Configure seu sistema de whitelist', value: '```Configure o sistema de whitelist do botão abaixo. Com este recurso, você pode escolher entre dois métodos: o primeiro envolve perguntas aleatórias com respostas para adicionar, modificar ou remover perguntas; o segundo método exige apenas o nome de usuário e o ID do jogador. Escolha o método que melhor se adapta às suas necessidades e personalize a experiência do seu servidor.```', inline: false },
        { name: 'Configure o sistema de ticket', value: '```Personalize os tickets do seu jeito! Crie diversos tipos em canais diferentes ou centralize tudo em um só. Adicione, modifique ou remova a qualquer momento.```', inline: false },
        { name: 'Configure e customize o seu connect', value: '```Personalize o seu embed de conexão do servidor de FiveM com um botão que leva diretamente para o seu servidor, escolha se deseja mostrar a quantidade de jogadores e o status do servidor e configure o layout da mensagem da forma que quiser.```', inline: false }
    )
    .setThumbnail('https://media.discordapp.net/attachments/1082792918781268138/1100576287904505856/Nyth__discord_logo_as_a_monster_2530ae31-cc62-4189-9b31-031c25118117-removebg-preview.png')

const welcomeEmbed = new EmbedBuilder().setTitle('Configurar boas-vindas')
    .setDescription('Esta função permite que você configure o embed da sua mensagem de boas-vindas. Com ela, você pode adicionar o ID do canal de boas-vindas, configurar o título, descrição, thumbnail, fields e footer da mensagem. Com isso, você poderá personalizar completamente a mensagem de boas-vindas que o bot enviará aos novos membros do seu servidor.')
    .addFields(
        { name: 'PARAMETROS !', value: '```Parâmetros de função permitem personalizar a mensagem de boas-vindas do bot de acordo com suas preferências. Basta inserir o parâmetro no campo correspondente. Lembre-se de verificar se o campo aceita o parâmetro desejado.```', inline: false },
        { name: '```!member```', value: '```!member = Membro que entrou```', inline: false },
        { name: '```!guildname```', value: '```!guildname = Nome do seu servidor```', inline: false },
        { name: '```!count```', value: '```!count = Quantidade de membros do servidor```', inline: false },
        { name: 'Titulo', value: 'O titulo aceita os seguinter parametros: !member ; !guildname ; !count', inline: false },

    )
module.exports = { mainEmbed, welcomeEmbed }
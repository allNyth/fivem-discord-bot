const { EmbedBuilder, ActionRowBuilder, Embed } = require('discord.js');
const image = (__dirname, '../PROJETORP.png')

const mainEmbed = new EmbedBuilder().setTitle('Bem-vindo a configuração inicial do ProjetoRP Bot')
    .setDescription('O ProjetoRP bot permite que você configure a mensagem de boas-vindas para um usuario no seu servidor discord, tambem contem configuraçoes de whitelist e ferramenta de ticket criada para te auxiliar no seu servidor discord voltado para fiveM')
    .setFields({ name: `Configure a mensagem de boas-vindas`, value: '```Personalize o sistema de boas-vindas com a opção de editar a mensagem e canal, além de testar o evento de entrada no servidor. Adapte o bot ao seu estilo e receba novos membros com uma mensagem personalizada.```', inline: false },
        { name: 'Configure seu sistema de whitelist', value: '```Configure o sistema de whitelist do botão abaixo. Com este recurso, você pode escolher entre dois métodos: o primeiro envolve perguntas aleatórias com respostas para adicionar, modificar ou remover perguntas; o segundo método exige apenas o nome de usuário e o ID do jogador. Escolha o método que melhor se adapta às suas necessidades e personalize a experiência do seu servidor.```', inline: false },
        { name: 'Configure o sistema de ticket', value: '```Personalize os tickets do seu jeito! Crie diversos tipos em canais diferentes ou centralize tudo em um só. Adicione, modifique ou remova a qualquer momento.```', inline: false },
        { name: 'Configure e customize o seu connect', value: '```Personalize o seu embed de conexão do servidor de FiveM com um botão que leva diretamente para o seu servidor, escolha se deseja mostrar a quantidade de jogadores e o status do servidor e configure o layout da mensagem da forma que quiser.```', inline: false }
    )
    .setThumbnail('https://media.discordapp.net/attachments/1082792918781268138/1100576287904505856/Nyth__discord_logo_as_a_monster_2530ae31-cc62-4189-9b31-031c25118117-removebg-preview.png')
module.exports = { mainEmbed }
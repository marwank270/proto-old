const Discord = require('discord.js');
const { prefix, nom, version, suggestion, idcreateur } = require('../../config.json');
const stock = require('../../json/stock.json');
const { getRandomInt } = require('../../handler/functions.js');

module.exports = {
    name: "suggestion",
    enabled: true,
    aliases: ["report", "idee"],
    usage: "[idée]",
    guild: true,
    category: "info",
    description: "Envoi une suggestion au dveloppeurs",
    run: async(proto, message) => {

        let idee = message.content.slice(prefix.length).trim().split(' ').slice(1).join(' ');
        let genre = '';
        let genreChoix = getRandomInt(1, 2)

        if (genreChoix === 1) { genre = ':man_raising_hand:' };
        if (genreChoix === 2) { genre = ':woman_raising_hand:' };

        if (!idee) return message.channel.send(stock.syntaxe.args + ` une idée : \`${prefix}suggestion il faudrait une commande pour donner de l\'amour <3\`. (oui oui je l\'ai faite : ${prefix}bonheur @pooptest)`)

        const suggestionEmbed = new Discord.MessageEmbed()
            .setAuthor(` = > ${message.author.tag}`, iconURL = message.author.avatarURL())
            .setTitle(`:bulb: Nouvelle **suggestion** d'un utilisateur !`)
            .setDescription(`${genre} ${message.author.tag} (ID : \`${message.author.id}\`) veut aider à améliorer ${nom} v${version}.\n(Envoyé depuis le serveur __***${message.guild.name}***__ (ID :\`${message.guild.id}\`))`)
            .addField(`Contenu de la **suggestion** :`, `\`\`\`${idee}\`\`\` `)
            .setColor('WHITE')
            .setTimestamp(message.createdAt)
            //proto.channels.cache.find(channel => channel.id === '853659592989868072').client.users.cache.find(user => user.id === idcreateur).send(suggestionEmbed) // cette ligne envoi le message en dm au createur par le biais d'un serveur commun entre le proto et le createur
        proto.channels.cache.find(channel => channel.id === '853659592989868072').client.channels.cache.find(channel => channel.id === suggestion).send(`<@${idcreateur}>`, suggestionEmbed) // cette ligne envoi le message sur un salon du serveur des dev par le biais d'un serveur commun entre le proto et le createur

        console.log(`Nouvelle suggestion de ${message.author.tag}, il/elle propose : ${idee}`)
        message.react('❤');
        message.reply(':white_check_mark: Merci beaucoup pour ta suggestion ! Elle a bien été transmise à mes développeurs, va être analysé et mise en place -*si possible*- d\'ici ma prochaine mise à jour ^^.');

    }
}
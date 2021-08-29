const Discord = require('discord.js');
const stock = require('../../json/stock.json');

const { prefix, nom } = require('../../config.json');

module.exports = {
    name: "say",
    aliases: ["repete", "dis"],
    category: "Modération",
    permission: "MANAGE_CHANNELS",
    enabled: true,
    guild: true,
    usage: "[texte]",
    description: `Une commande pour faire parler ${nom}`,
    run: async(proto, message) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(":x: Tu ne possèdes pas les permissions nécessaire pour utiliser cette commande `(il te faut la permission de gérer les salons)`.");

        const args = message.content.slice(prefix.length).trim().split(' ').slice(1).join(' ');
        let channelMention = message.mentions.channels.first();
        let memberMention = message.mentions.members.first();



        if (!args) return message.channel.send(stock.syntaxe.args + ` \`${prefix}say Bonjour à tous :wink:\`. `)

        if (!channelMention) {
            if (!message.deletable) {
                message.react('❌');
                message.author.send(`Je n'ai pas pu supprimer ton message dans ${message.channel} (erreur de permission ou de position dans la hiérarchie du serveur)`)
            }
            message.channel.send(args);
        }

        if (channelMention) {
            channelMention.send(args);
        }

        if (memberMention) {
            memberMention.send(`:inbox_tray: **${message.author.username}** te dis : \n${args}`)
        }


    }
}
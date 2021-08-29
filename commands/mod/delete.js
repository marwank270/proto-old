const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "delete",
    enabled: true,
    aliases: ["del", "suppr"],
    usage: "[rien / #channel]",
    guild: true,
    category: "Modération",
    permission: "MANAGE_CHANNELS",
    description: "Permet de supprimer rapidement un salon",
    run: async(proto, message) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(stock.erreurs.permissions.channels);

        let mention = message.mentions.channels.first();

        if (!mention) return message.channel.delete();

        if (mention) {
            if (!mention.deletable) return message.channel.send(':x: Impossible de supprimer le salon cible.');
            mention.delete();
            message.delete();
            message.channel.send(`:white_check_mark: Le salon *__#${mention.name}__* supprimé avec succès.`).then(message => message.delete({ timeout: 15000 }));
        }

    }
}
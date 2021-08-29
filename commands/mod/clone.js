const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "clone",
    enabled: true,
    aliases: ["copy"],
    usage: "[rien / #channel]",
    guild: true,
    category: "Modération",
    permission: "MANAGE_CHANNELS",
    description: "Clone un salon",
    run: async(proto, message) => {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(stock.erreurs.permissions.channels)

        let mention = message.mentions.channels.first();

        if (mention) {
            mention.clone().then(channel => channel.send(':white_check_mark: Le salon à été cloné avec succès.').then(message => message.delete({ timeout: 15000 })));
            message.react('✅');
        }
        if (!mention) {
            message.channel.clone().then(channel => channel.send(':white_check_mark: Le salon à été cloné avec succès.').then(message => message.delete({ timeout: 15000 })));
            message.react('✅');
        };

    }
}
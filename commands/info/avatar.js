const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "avatar",
    enabled: true,
    aliases: ["av", "pfp"],
    usage: "[rien / @user]",
    guild: true,
    category: "info",
    description: "Permet d'avoir un lienn vers l'avatar",
    run: async(proto, message) => {
        let avmention = message.mentions.members.first();
        if (!avmention) {
            message.channel.send(":inbox_tray: Et voilà : " + message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 512 }))
        };
        if (avmention == proto) {
            message.channel.send(":inbox_tray: Et me voilà : " + proto.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
        }
        if (avmention) {
            message.channel.send(":inbox_tray: Et voilà : " + avmention.user.displayAvatarURL({ format: 'png', dynamic: true, size: 512 }))
        };

    }
}
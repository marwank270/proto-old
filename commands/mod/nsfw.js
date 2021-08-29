const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "nsfw",
    enabled: true,
    aliases: ["lewd"],
    usage: "[rien / #channel]",
    guild: true,
    category: "Modération",
    permission: "MANAGE_CHANNELS",
    description: "Active ou désactive le nsfw dans le salon cible",
    run: async(proto, message) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(stock.erreurs.permissions.channels)
            //let args = message.content.slice(prefix.length).trim().split(' ').slice(2).join(' ');
        const channelMention = message.mentions.channels.first();

        if (!channelMention) { //return message.channel.send(`:mag_right: Le salon cibe n'as pas ou à mal été mentionné, essaye \`${prefix}nsfw #channel\`. `);
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(stock.erreurs.permissions.channels);
            if (message.channel.nsfw === false) {
                message.channel.setNSFW(true);
                message.channel.send(`:red_circle: Le salon __*${message.channel.name}*__ est maintenant un salon NSFW :underage:`);
            }
            if (message.channel.nsfw === true) {
                message.channel.setNSFW(false);
                message.channel.send(`:green_circle: Le salon __*${message.channel.name}*__ n'est maintenant plus un salon NSFW :baby_symbol:`);
            }
        }

        if (channelMention) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(stock.erreurs.permissions.channels);
            if (channelMention.nsfw === false) {
                channelMention.setNSFW(true);
                message.channel.send(`:red_circle: Le salon __*${channelMention}*__ est maintenant un salon NSFW :eyes:`);
            }
            if (channelMention.nsfw === true) {
                channelMention.setNSFW(false);
                message.channel.send(`:green_circle: Le salon __*${channelMention}*__ n'est maintenant plus un salon NSFW :eye:`);
            }
        }

    }
}
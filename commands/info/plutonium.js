const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "plutonium",
    enabled: true,
    usage: "[username]",
    guild: true,
    category: "info",
    description: "Permet d'obtenir un lien direct vers le profil plutonium",
    run: async(proto, message) => {

        let args = message.content.trim().split(/ +/g);

        if (!args) return message.channel.send('https://forum.plutonium.pw')

        const userName = args[1];

        message.react('<:pplutonium:843950898061115403>');
        message.channel.send('https://forum.plutonium.pw/user/' + userName);

    }
}
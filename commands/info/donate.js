const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "donate",
    enabled: true,
    aliases: ["don"],
    guild: false,
    category: "générosité",
    description: "Sers un lien paypal sur un plateau pour un beau don",
    run: async(proto, message) => {

        message.channel.send('Et voici <3 : https://www.paypal.com/paypalme/protobot')

    }
}
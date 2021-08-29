const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "senddm",
    enabled: true,
    aliases: ["pvsend"],
    usage: "[ton message]",
    guild: true,
    category: "info",
    description: "Envoi un message pas trop anonyme mais quand même un peu",
    run: async(proto, message) => {

        let args = message.content.trim().split(/ +/g);
        let mention = message.mentions.members.first();
        let msg = message.content.slice(prefix.length).trim().split(' ').slice(2).join(' ');

        if (!mention) return message.channel.send(stock.syntaxe.mention + ` (\`${prefix}senddm =>@pooptest<= c'est moi qui a pété dans la voiture hier\`).`);
        if (!msg) return message.channel.send(stock.syntaxe.args + ` (\`${prefix}senddm @pooptest =>c'est moi qui a pété dans la voiture hier<=\`).`);

        message.delete().then(message => message.channel.send(":white_check_mark: Le message viens d'être transmis :wink:"));

        mention.send(`:performing_arts: Quelqu'un du serveur __${message.guild.name}__ aimerait te dire : \`\`\`${msg}\`\`\``);

    }
}
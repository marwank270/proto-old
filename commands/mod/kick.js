const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "kick",
    enabled: true,
    usage: "[@user][raison]",
    guild: true,
    category: "Modération",
    permission: "KICK_MEMBERS",
    description: "Exclut le membre cible",
    run: async(proto, message) => {

        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(stock.erreurs.permissions.kick);

        let mention = message.mentions.members.first(); //message.mentions.members.get(args[0]);
        let args = message.content.split(' ');
        let guildname = message.guild.name;
        let raison = message.content.slice(prefix.length).trim().split(' ').slice(2).join(' ');

        if (!mention) return message.channel.send(stock.syntaxe.mention + ` : \`${prefix}kick =>@pooptest<= non respect des ToS de Discord\`. `);
        if (mention == undefined) return message.reply(":question: L'accusé a mal , ou n'a pas été mentionné.");
        if (!raison) return message.channel.send(stock.syntaxe.args + ` une raison : \`${prefix}kick @pooptest =>non respect des ToS de Discord<=\`. `);
        if (kicked.user.id === idcreateur) return message.channel.send(':ninja: Ah désolé je peux pas c\'est le patron ca.');

        let kicked = new Discord.MessageEmbed()
            .setAuthor(` =>  ${mention.user.tag}`, iconURL = mention.user.avatarURL())
            .setTitle(':outbox_tray:  Tu as été **Expulsé(e)** ')
            .setDescription("Du serveur " + `_${guildname}_.` + "\n\n" + "Raison : " + "`" + `${raison}` + "`")
            .setColor('ORANGE')
            .setTimestamp();
        let kickedlog = new Discord.MessageEmbed()
            .setAuthor(` =>  ${mention.user.tag}`, iconURL = mention.user.avatarURL())
            .setTitle(`:outbox_tray: Expulsion.`)
            .setDescription(`<@${message.author.id}> à expulsé <@${mention.id}> (ID : \`${mention.user.id}\`).` + '\n\nRaison : ```' + `${raison}` + '```')
            .setColor('ORANGE')
            .setTimestamp(message.createdAt);

        if (mention.kickable) {
            mention.send(kicked);
            mention.kick();
            message.channel.send(":outbox_tray: " + mention.user.tag + `  (ID : \`${mention.id}\`)` + " à bien été **explusé** du serveur , Bye bye :)");
            message.guild.channels.cache.find(c => c.name === "logs-ツ").send(kickedlog);
        };

        if (!mention.kickable) {
            if (mention === message.guild.owner) return message.reply(`:x: Ecoute moi bien Billy boy, le dernier mec qui à tenté ça n'était ni du saumon ni du crack, pourtant il s'est fait fumer.`)
            if (mention.roles.highest > message.member.roles.highest) return message.reply(`:x: Tu ne peut pas exclure ${mention} parce qu'il possède un rôle plus haut dans la hiérarchie du serveur. (${mention.roles.highest})`)
            else {
                message.reply(`:x: ${mention} ne peut pas être exclut, pour une raison inconnue.`);
            }
        };

    }
}
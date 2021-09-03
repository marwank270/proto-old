//test de commit
const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "ban",
    enabled: true,
    usage: "[@user][raison]",
    guild: true,
    category: "Administration",
    permission: "BAN_MEMBERS",
    description: "Bannit le membre cible",
    run: async(proto, message) => {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(stock.erreurs.permissions.ban);

        let mention = message.mentions.members.first(); //message.mentions.members.get(args[0]);
        let args = message.content.split(' ');
        let guildname = message.guild.name;
        var raison = message.content.slice(prefix.length).trim().split(' ').slice(2).join(' ');

        if (!mention) return message.channel.send(stock.syntaxe.mention + ` : \`${prefix}ban =>@pooptest<= infraction aux règles du serveur et aux ToS de Discord\`. `)
        if (mention == undefined) return message.reply(":question: L'accusé a mal , ou n'a pas été mentionné.");
        if (!raison) return message.channel.send(stock.syntaxe.args + ` une raison : \`${prefix}kick @pooptest =>non respect des ToS de Discord<=\`. `);
        if (mention.user.id === idcreateur) return message.channel.send(':ninja: Ah désolé je peux pas c\'est le patron ca.');

        let banned = new Discord.MessageEmbed()
            .setAuthor(` =>  ${mention.user.tag}`, iconURL = mention.user.avatarURL())
            .setTitle(':no_entry_sign:  Tu as été **Banni(e)** ')
            .setDescription("Du serveur " + `_${guildname}_.` + "\n\n" + "Raison : " + "`" + `${raison}` + "`")
            .setColor('RED')
            .setTimestamp();
        let bannedlog = new Discord.MessageEmbed()
            .setAuthor(` =>  ${mention.user.tag}`, iconURL = mention.user.avatarURL())
            .setTitle(`:no_entry_sign: Bannissement.`)
            .setDescription(`<@${message.author.id}> à banni <@${mention.id}> (ID : \`${mention.user.id}\`).` + '\n\nRaison : ```' + `${raison}` + '```')
            .setColor('RED')
            .setTimestamp(message.createdAt);


        if (mention.bannable) {
            mention.ban();
            message.channel.send(":outbox_tray: " + mention.user.tag + `  (ID : \`${mention.id}\`)` + " à bien été **banni** du serveur , à jamais :)");
            mention.send(banned);
            message.guild.channels.cache.find(c => c.name === "logs-ツ").send(bannedlog);
        };

        if (!mention.bannable) {
            if (mention === message.guild.owner) return message.reply(`:x: Ecoute moi bien Billy boy, le dernier mec qui à tenté ça n'était ni du saumon ni du crack, pourtant il s'est fait fumer.`)
            if (mention.roles.highest > message.member.roles.highest) return message.reply(`:x: Tu ne peut pas exclure ${mention} parce qu'il possède un rôle plus haut dans la hiérarchie du serveur. (${mention.roles.highest})`)
            else {
                message.reply(`:x: ${mention} ne peut pas être exclut, pour une raison inconnue.`);
            }
        };

    }
}
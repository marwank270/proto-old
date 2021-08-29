const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "unban",
    enabled: true,
    aliases: ["deban", "revoque"],
    usage: "[userID] [raison]",
    guild: true,
    category: "Administration",
    permission: "BAN_MEMBERS",
    description: "Débannit le membre cible du serveur",
    run: async(proto, message) => {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply(stock.erreurs.permissions.ban);

        let args = message.content.split(' ');
        let bannedID = args[1];
        let raison = message.content.slice(prefix.length).trim().split(' ').slice(2).join(' ');

        if (!args[1]) return message.channel.send(stock.syntaxe.args + ` un ID d'utilisateur bannit du serveur : \`(${prefix}unban =>271281354157719552<<= Erreur du staff)\`.`);
        if (!raison) raison = 'Aucune raison spécifiée';

        message.guild.members.unban(bannedID, [raison]).catch(err => {
            console.log(err);
            return message.channel.send(':x: une erreur est survenue lors de l\'unban de ce membre.');
        })
        message.channel.send(":four_leaf_clover: " + `<@${bannedID}>` + " à bien été **débanni** du serveur pour `" + `${raison}\``); // par la suite il peut être réinvité sur le serveur avec la commande \`${prefix}invite [ID]\``);

    }
}
const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "rename",
    enabled: true,
    usage: "[@user / #channel / @role][nom]",
    guild: true,
    category: "Modération",
    permission: "MANAGE_NICKNAMES / MANAGE_CHANNELS / MANAGE_ROLES",
    description: "Changer un nom quelque part n'aura jamais été aussi simple",
    run: async(proto, message) => {

        const args = message.content.slice(prefix.length).trim().split(' ').slice(2).join(' '); //Définition d'arguments séparé par des espaces
        const mention = message.mentions;
        const memberMention = message.mentions.members.first();
        const roleMention = message.mentions.roles.first();
        const channelMention = message.mentions.channels.first();

        if (!args) return message.channel.send(`:question: Il manque des arguments, essaye \`${prefix}rename #channel cookie land \` ou encore \`${prefix}rename @pooptest the testeur\`. `)

        if (!mention && args) { //Si pas de mention l'auteur est sélectionné, si c'est le propriétaire : message d'erreur
            if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(stock.erreurs.permissions.nicknames);
            if (message.member === message.guild.owner) return message.channel.send(":x: Désolé je ne peux pas te rennomer sur le serveur, tu es le propriétaire donc plus haut que moi dans la hiérarchie de ton serveur.")
            if (message.member !== message.guild.owner) {
                message.member.setNickname(args)
                message.react('📝');
            }
        }

        /*if (!mention) {
            message.member.setNickname(args)
            message.react('📝');
        }*/

        if (memberMention) {
            if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(stock.erreurs.permissions.nicknames);
            if (message.member.roles.highest.comparePositionTo(message.mentions.members.first().roles.highest) < 1) return message.channel.send(`:x: Tu ne peux pas utiliser cette commande sur ${memberMention.user.tag}, il est au dessus de toi dans la hiérarchie du serveur.`);
            memberMention.setNickname(args);
            if (!memberMention.bot) {
                memberMention.send(`:information_source: Ton pseudo sur le serveur __*${message.guild.name}*__ à été changé en **${args}**.`)
                message.react('📝');
            }
        }

        if (roleMention) {
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(stock.erreurs.permissions.roles);
            roleMention.setName(args)
            message.react('📝');
        }

        if (channelMention) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(stock.erreurs.permissions.channels);
            channelMention.setName(args)
            message.react('📝');
        }

    }
}
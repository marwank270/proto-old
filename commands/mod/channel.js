const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "channel",
    enabled: true,
    aliases: ["ch", "c"],
    usage: "[text / voice / category] [nom]",
    guild: true,
    category: "Modération",
    permission: "MANAGE_CHANNELS",
    description: "Permet de créer un salon de différent type avec des noms personalisés",
    run: async(proto, message) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(stock.erreurs.permissions.channels);

        const args = message.content.slice(prefix.length).trim().split(' ').slice(2).join(' ');
        const arg = message.content.trim().split(' ');

        let channelName = args;

        //if (!arg[1] || arg[1] !== 'text' | 'voice' | 'news' | 'category' | 'store') return message.channel.send(stock.syntaxe.args + ` un type de salon \`(text , voice , category , news , store)\` (news et store disponible seulement si le mode comunautée est activé) : \`${prefix}channel text no mic\` ou encore \`${prefix}channel voice Réunion\`. `)
        if (!args) channelName = message.author.username;

        if (arg[1] === "text") { ////argument a redéfinir complètement
            message.guild.channels.create(channelName, {
                type: 'text',
                permissionOverwrites: [{ deny: 'VIEW_CHANNEL', id: message.guild.id }],
                parent: message.channel.parentID,
                position: message.channel.position + 1
            }).then(channel => {
                channel.send(`:white_check_mark: ${message.author} le salon à correctement été créé.`).then(message => {
                    message.delete({ timeout: 15000 })
                })
            })
            message.react('📝')
        }
        if (arg[1] === "voice") {
            message.guild.channels.create(channelName, {
                type: 'voice',
                permissionOverwrites: [{ deny: 'VIEW_CHANNEL', id: message.guild.id }],
                parent: message.channel.parentID,
                position: message.channel.position + 1
            }).then(message.channel.send(`:white_check_mark: ${message.author} le salon à correctement été créé.`).then(message => {
                message.delete({ timeout: 15000 })
            }));
            message.react('🔊')
        }
        if (arg[1] === "news") {
            message.guild.channels.create(channelName, {
                type: 'news',
                permissionOverwrites: [{ deny: 'VIEW_CHANNEL', id: message.guild.id }],
                parent: message.channel.parentID,
                position: message.channel.position + 1
            }).then(channel => {
                channel.send(`:white_check_mark: ${message.author} le salon à correctement été créé.`).then(message => {
                    message.delete({ timeout: 15000 })
                })
            })
            message.react('📣')
        }
        if (arg[1] === "store") {
            message.guild.channels.create(channelName, {
                type: 'store',
                permissionOverwrites: [{ deny: 'VIEW_CHANNEL', id: message.guild.id }],
                parent: message.channel.parentID,
                position: message.channel.position + 1
            }).then(channel => {
                channel.send(`:white_check_mark: ${message.author} le salon à correctement été créé.`).then(message => {
                    message.delete({ timeout: 15000 })
                })
            })
            message.react('📋')
        }
        if (arg[1] === "category") {
            message.guild.channels.create(channelName, {
                type: 'category',
                permissionOverwrites: [{ deny: 'VIEW_CHANNEL', id: message.guild.id }],
                parent: null,
                position: message.channel.parent.position + 1
            }).then(message.channel.send(`:white_check_mark: ${message.author} le salon à correctement été créé.`).then(message => {
                message.delete({ timeout: 15000 })
            }));
            message.react('📂')
        }

    }
}
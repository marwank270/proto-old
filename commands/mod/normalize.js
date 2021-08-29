const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "normalize",
    enabled: true,
    aliases: ["simplify"],
    usage: "[@user]",
    guild: true,
    category: "Modération",
    permission: "MANAGE_NICKNAMES",
    description: "Permet de supprimer les caractères spéciaux immentionnables.",
    run: async(proto, message) => {

        if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(stock.erreurs.permissions.nicknames);

        let mention = message.mentions.members.first();
        if (!mention) return message.channel.send(stock.syntaxe.mention + ` : \`${prefix}normalize @Ƥ̼̆ͤƠ̥͍̓̊Ơ̤͑͒ͥƤ͉̗̀̓̅̃Ƭ̗̲̲͙̹̐̽Є̭̬́̇ͤƧ̋ͩ̓Ƭ͍͗̊͂͑\`. `)

        let oldNametoString = mention.user.username.toString();
        let oldName = mention.user.username;
        let newName = oldName.normalize('NFKD');

        mention.setNickname(newName);

        message.channel.send(`:white_check_mark: Le pseudo de **${mention.user.tag}** à bien été normalisé de **${oldNametoString}** en **${newName}**.`);

    }
}
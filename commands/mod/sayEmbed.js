const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "sayembed",
    enabled: true,
    aliases: ["sembed", "embed"], //non fonctionnels actuellement,
    //usage: "[titre de l'embed] / [description de l'embed]",
    usage: "[texte]",
    guild: true,
    category: "Modération",
    permission: "MANAGE_MESSAGES",
    description: `Une commande pour faire renvoyer un embed par ${nom}`,
    run: async(proto, message) => {

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(stock.erreurs.permissions.channels);

        const args = message.content.slice(prefix.length).trim().split(' ').slice(1).join(' '); //.replace(title, '');
        //let title = args.split('/').slice(args.lenght).join(' ').replace(args, '');

        if (!args) return message.channel.send(stock.syntaxe.args + ` \`(${prefix}sayembed =>ce que je veux mettre en embed<=)\`.`);
        //if (!title) title = `${message.author} dit :`

        let embed = new Discord.MessageEmbed()
            //.setTitle(title)
            .setDescription(args)
            .setColor('#820ad1')

        message.delete();
        message.channel.send(embed)

    }
}
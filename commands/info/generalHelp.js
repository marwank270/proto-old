const Discord = require('discord.js');
const stock = require('../../json/stock.json');
const { prefix, nom, version } = require('../../config.json');

module.exports = {
    name: "gen",
    aliases: ["general", "général", "géneral", "genéral"], //non fonctionnels actuellement
    guild: false,
    enabled: true,
    category: "info",
    description: "Affiche la liste des commandes générales de proto",
    run: async(proto, message) => {

        let embedIcon;
        let footerIcon;

        const generalEmbed = new Discord.MessageEmbed()
            .setAuthor('Proto help - Général', iconURL = proto.user.avatarURL(true))
            .setColor('#820ad1')
            .setThumbnail(embedIcon)
            .addField(":globe_with_meridians: Voici la liste des commandes générales", "\u200B", false)
            .addField(`\`${prefix}ping\``, "__Description__: Affiche le **ping** de **Proto ツ** et celui de l'API de Discord.\n\u200B", false)
            .addField(`\`${prefix}avatar | av\` __[rien/@user]__`, "__Description__: Pour obtenir l'**avatar** de ton choix.\n\u200B", false)
            .addField(`\`${prefix}info | whois\` __[rien/server/@user]__`, "__Description__: Affiche quelques **informations** sur **Proto ツ**, le **serveur** où l'**utilisateur**.\n\u200B", false)
            .addField(`\`${prefix}serverowner | sowner\` `, "__Description__: Affiche le **propriétaire** du **serveur**.\n\u200B", false)
            .addField(`\`${prefix}rolelist | rlist\``, "__Description__: Affiche la liste des **rôles** disponibles sur le **serveur**.\n\u200B", false)
            .addField(`\`${prefix}emojilist | elist\``, "__Description__: Affiche la liste des **émojis** disponibles sur le **serveur**.\n\u200B", false)
            .addField(`\`${prefix}uptime | up\``, "__Description__: Affiche le **temps** d'activité de **Proto ツ** depuis son dernier redémarrage.\n\u200B", false)
            .addField(`\`${prefix}link\``, "__Description__: Envoi le **lien d'invitation** et de **commandes** en **DM**.\n\u200B", false)
            .addField(`\`${prefix}dev\``, "__Description__: Affiche fièrement mes **créateurs**.\n\u200B", false)
            //.addField(`\`${prefix}bonheur\`__[rien/@user]__`, "__Description__: Besoin d'un peu de gentillesse et d'amour ? I've got your back :gift_heart:.\n\u200B", false)
            .addField(`\`${prefix}suggestion | idee\` __[suggestion/idée]__`, "__Description__: Tu as une **idée**, une **suggestion** où un **conseil** pour aider à m'améliorer ? (Déjà merci d'y avoir réfléchi :heart:) Et bien dis moi ca avec cette commande j'analyserais et **transmettrais** à mon développeur ;).\n\u200B", false)
            .setFooter("Demandé par : " + message.author.username, iconURL = footerIcon)
            .setTimestamp(Date.now());

        if (message.channel.type === "dm") {
            footerIcon = null
            embedIcon = null;
            message.channel.send(generalEmbed);
            message.channel.send(':exclamation: Beaucoup de commandes ont été conçu pour être uniquement utilisée dans des serveurs, elles seront désactivés ici.\nParole de bot si vous voulez bien me tester vaut mieux le faire posé dans un serveur.');
        };
        if (message.channel.type === "text") {
            footerIcon = message.author.avatarURL();
            embedIcon = message.guild.iconURL();
            message.channel.send(generalEmbed);
        };
    }
}
const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');

module.exports = {
    name: "fun",
    aliases: ["autre"], //non fonctionnels actuellement
    category: "info",
    enabled: true,
    guild: false,
    description: `Affiche la liste des commandes fun et autres de ${nom}`,
    run: async(proto, message) => {

        let thumbenailIcon;
        let footerIcon;

        const funEmbed = new Discord.MessageEmbed()
            .setAuthor("Proto help - Fun", iconURL = proto.user.avatarURL(true))
            .setColor("#820ad1")
            .setThumbnail(thumbenailIcon)
            .addField(':tada: Voici la liste des commandes fun et innutiles', '\u200B')
            .addField(`\`${prefix}8\` __[question]__`, "__Description__: Pose une **question** et observe la réponse de la boule, le hasard fera bien choses.\n\u200B", false)
            .addField(`\`${prefix}random\` __[min][max]__`, "__Description__: Questionne le hasard entre **ton min et ton max** ou entre **1** et **1000** par défaut (les bornes sont incluses).\n\u200B", false)
            .addField(`\`${prefix}bonheur\` __[rien/@user]__`, "__Description__: Besoin d'un peu de gentillesse et d'amour ? I've got your back :gift_heart:.\n\u200B", false)
            .addField(`\`${prefix}note\` __[@user]__`, "__Description__: Vous voulez que je vous note sur 20 ? Attention je suis cash !\n\u200B", false)
            .addField(`\`${prefix}pof\` __[pile/face]__`, "__Description__: Lancez les paris **Pile** ou **Face** et Proto ツ tranche !\n\u200B", false)
            .addField(`\`${prefix}pfc\` __[pierre/feuille/ciseaux]__`, "__Description__: Tu te fais chier ? Joue à **Pierrre Feuille Ciseaux** avec Proto ツ (Et y'a pas de *puis* cette merde n'a **JAMAIS** et ne fera **JAMAIS** partie du jeu t'entends !?)\n\u200B", false)
            .addField(`\`${prefix}senddm\` __[@user][texte]__`, "__Description__: Envoi un **message anonyme** en **DM** (l'utilisateur doit avoir ouvert ses dm avec p.opendm). \`(commande surveillé dans les logs)\`.\n\u200B", false)
            .addField(`\`${prefix}plutonium\` __[pseudo]__`, "__Description__: Obtiens un lien direct pour ajouter un utilisateur [Plutonium](https://plutonium.pw/).\n\u200B", false)
            .addField(`\`${prefix}donate\``, "__Description__: Obtiens un lien direct pour donner un peu de sous aux développeurs, accéder au programme beta et au status <:vip_proto:867845139006488596>**VIP User**<:vip_proto:867845139006488596>.\n\u200B", false)
            .setFooter("Demandé par : " + message.author.username, iconURL = message.author.avatarURL())
            .setTimestamp(Date.now());

        if (message.channel.type === "dm") {
            thumbnailIcon = null;
            footerIcon = null
            message.channel.send(funEmbed);
            message.channel.send(':exclamation: Beaucoup de commandes ont été conçu pour être uniquement utilisée dans des serveurs, elles seront désactivés ici.\nParole de proto si vous voulez bien me tester vaut mieux le faire posé dans un serveur.');
        };
        if (message.channel.type === "text") {
            thumbnailIcon = message.guild.iconURL();
            footerIcon = message.author.avatarURL();
            message.channel.send(funEmbed);
        };
    }

}
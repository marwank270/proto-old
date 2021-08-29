const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');

module.exports = {
    name: "mod",
    aliases: ["moderation"], //non fonctionnels actuellement
    guild: false,
    enabled: true,
    category: "info",
    description: "Affiche la liste des commandes de modération de proto",
    run: async(proto, message) => {

        let thumbenailIcon;
        let footerIcon;

        const moderationEmbed = new Discord.MessageEmbed()
            .setAuthor("Proto help - Modération", iconURL = proto.user.avatarURL(true))
            .setColor("#820ad1")
            .setThumbnail(thumbenailIcon)
            .addField(`\`${prefix}setup\``, "__Description__: Installe un rôle **Muted** et un salon **logs-ツ** sur le serveur et enregistre le serveur dans la **base de donnée**.\n:warning: Attention, pour utiliser cette commande il faut avoir la permission Administrateur, elle est nécessaire à certaines de mes plus importantes commandes mais ne doit être utilisée qu'une fois.\u200B", false)
            .addField(`\`${prefix}clear | cls\` __[1-100/all]__`, "__Description__: **Supprime** jusqu'à **100 messages** ou tous en amont.\n\u200B", false)
            .addField(`\`${prefix}channel\` __[type][nom]__`, "__Description__: **Créé** un salon \`text\`, \`voice\`, ou \`category\` de nommé \`nom\`.\n\u200B", false)
            .addField(`\`${prefix}rename\` __[@user/@role/#channel][nom]__`, "__Description__: **Renommer quelqu'un, un rôle ou un salon** n'aura jamais été aussi **simple**.\n\u200B", false)
            .addField(`\`${prefix}delete\` __[rien/#channel]__`, "__Description__: **Supprime** le salon **actuel** ou **mentionné**.\n\u200B", false)
            .addField(`\`${prefix}nsfw\` __[rien/#channel]__`, "__Description__: **Active ou desactive** le caractère **NSFW** du salon **actuel** ou **mentionné**.\n\u200B", false)
            .addField(`\`${prefix}clone\` __[rien/#channel]__`, "__Description__: **Clone** le salon actuel ou mentionné (fonctionne aussi pour les catégories).\n\u200B", false)
            .addField(`\`${prefix}mute\` __[@user][raison]__`, "__Description__: **Réduit** la cible au **silence**.\n\u200B", false)
            .addField(`\`${prefix}unmute\` __[@user][raison]__`, "__Description__: **Rend** le droit de parler à la cible.\n\u200B", false)
            .addField(`\`${prefix}maxwarn\` __[nombre]__`, "__Description__: **Définit** le nombre **maximal de warn** avant tempban.\n\u200B", false)
            .addField(`\`${prefix}warn\` __[@user][raison]__`, "__Description__: **Avertit** la cible de sa **mauvaise action**.\n\u200B", false)
            .addField(`\`${prefix}kick\` __[@user][raison]__`, "__Description__: **Expulse** la cible du serveur.\n\u200B", false)
            .addField(`\`${prefix}ban\` __[@user][raison]__`, "__Description__: **Bannit** la cible du serveur.\n\u200B", false)
            .addField(`\`${prefix}unban\` __[@user][raison]__`, "__Description__: **Débannit** la cible du serveur.\n\u200B", false)
            .addField(`\`${prefix}normalize\` __[@user]__`, "__Description__: **Normalise** le pseudo pour le rendre mentionnable facilement (adieu les caractères spéciaux).\n\u200B", false)
            .setFooter("Demandé par : " + message.author.username, iconURL = footerIcon)
            .setTimestamp(Date.now());

        if (message.channel.type === "dm") {
            thumbnailIcon = null;
            footerIcon = null
            message.channel.send(moderationEmbed);
            message.channel.send(':exclamation: Beaucoup de commandes ont été conçu pour être uniquement utilisée dans des serveurs, elles seront désactivés ici.\nParole de proto si vous voulez bien me tester vaut mieux le faire posé dans un serveur.');
        };
        if (message.channel.type === "text") {
            thumbnailIcon = message.guild.iconURL();
            footerIcon = message.author.avatarURL();
            message.channel.send(moderationEmbed);
        };
    }
}
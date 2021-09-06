const Discord = require('discord.js');
const stock = require('../../json/stock.json');
const { prefix, nom, version } = require('../../config.json');

module.exports = {
    name: "help",
    aliases: ["aide"],
    guild: false,
    enabled: true,
    category: "info",
    description: `Affiche la liste des commandes de ${nom} et leurs détails comme ce que tu lis`, //bientot je compte faire une des emojis en bas et selon la réaction afficher la bonne page de l'embed
    run: async(proto, message, arg) => {

        const data = [];
        const command = proto.commands.get(arg[1]);

        let thumbnailIcon;
        let footerIcon;

        if (!arg[1]) { // aide classique si il n'y a pas d'argument
            const helpEmbed = new Discord.MessageEmbed()
                .setTitle(`:atom: Proto ツ \`${version}\``)
                .setColor("#820ad1")
                .setAuthor("Proto help", iconURL = proto.user.avatarURL(true))
                .setDescription("\n:bulb: Bienvenue dans l'aide Proto. \n\nPréfixe Actuel :" + "`" + prefix + "`" + "\n\n")
                .setThumbnail(thumbnailIcon)
                .addFields({ name: ":globe_with_meridians: Commandes Générales", value: `\nPour voir la liste des commandes générales de Proto ツ utilise la commande \`${prefix}gen | general\`.` }, { name: ":tools: Commande de modération", value: `\n Pour voir la liste des commandes de modération de Proto ツ utilise la commande \`${prefix}mod | moderation\`.` }, { name: ":tada: Commandes fun", value: `\n Pour voir la liste des commandes fun et autres de Proto ツ utilise la commande \`${prefix}fun | autre\`.` }, { name: ":link: Invitation", value: "\n[Lien d'invitation du proto](https://discord.com/oauth2/authorize?client_id=764872916512669749&scope=proto&permissions=2147483647)", inline: true }, { name: ":question: Aide spécifique", value: `\n Si tu as besoin d'aide ou d'infos pour une commande en particulier n'hésite pas à utiliser la commande \`${prefix}help commande\`.` })
                .addField(":keyboard: Liste des commandes et leurs status :", '[Lien vers les commandes de Proto ツ](https://pastebin.com/57gv1hAH)')
                .setFooter("Demandé par : " + message.author.username, iconURL = footerIcon)
                .setTimestamp(Date.now());
            if (message.channel.type === "dm") {
                thumbnailIcon = null;
                footerIcon = null;
                message.channel.send(helpEmbed);
                message.channel.send(':exclamation: Beaucoup de commandes ont été conçu pour être uniquement utilisée dans des serveurs, elles seront désactivés ici.\nParole de bot si vous voulez bien me tester vaut mieux le faire posé dans un serveur.');
            } else {
                footerIcon = message.author.avatarURL();
                thumbnailIcon = message.guild.iconURL();
                message.channel.send(helpEmbed);
            };
        }

        if (arg[1]) { // si il y a un argument derrière, help dynamique

            if (!command) return message.channel.send(':question: Humm nan, connait pas cette commande moi.(les alias ne sont pas pris en compte ici).');

            let authorIcon;
            let embedColor;

            if (command.category === 'Modération') embedColor = '#fc8c1c'
            if (command.category === 'info') embedColor = '#820ad1'
            if (command.category === 'Utile') embedColor = '#820ad1'
            if (command.category === 'Administration') embedColor = '#fc201c'

            if (message.channel.type === 'dm') {
                authorIcon = null;
            } else {
                authorIcon = proto.user.avatarURL();
            }

            //data.push(`**Commande:** ${command.name}`)
            if (command.aliases) data.push(`**Alias:** \`${command.aliases.join('/')}\`.`);
            if (command.usage) data.push(`**Syntaxe:** ${prefix}${command.name} ${command.usage}.`)
            data.push(`**Active:** \`${command.enabled}\`.`)
            if (command.category) data.push(`**Type:** ${command.category}.`);
            if (command.permission) data.push(`**Permissions Requise(s):** \`${command.permission}\`.`)
            data.push(`**Serveur Uniquement:** \`${command.guild}\`.`)
            if (command.description) data.push(`**Description:** ${command.description}.`)

            message.channel.send(data, { split: true });

            const dynamicalHelper = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setAuthor(`${nom} - Aide aux Commandes`, iconURL = authorIcon)
                .setTitle(`**Commande:** ${command.name}`)
                .setDescription(data)

            //message.channel.send(dynamicalHelper);
        }
    }
}
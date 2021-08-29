const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');

module.exports = {
    name: "rolelist",
    enabled: true,
    aliases: ["listrole"],
    guild: true,
    category: "info",
    description: "Affiche une liste de tous les rôles disponibles sur le serveur",
    run: async(proto, message) => {

        let r = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const rolesinfo = new Discord.MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setColor("#820ad1")
            .setThumbnail(message.author.displayAvatarURL(), true)
            .addField(':page_facing_up: Rôles du serveur  ' + `[${message.guild.roles.cache.size}] :`, r, true)
            .setImage(message.guild.iconURL())
            .setTimestamp();

        message.channel.send(rolesinfo);
    }
}
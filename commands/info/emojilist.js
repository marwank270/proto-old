const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');

module.exports = {
    name: "emojilist",
    enabled: true,
    aliases: ["listemoji"],
    guild: true,
    category: "info",
    description: "Affiche une liste de tous les emojis disponibles sur le serveur",
    run: async(proto, message) => {

        let emojiNotAnimated = [];
        let emojiAnimated = [];
        let emm;
        message.guild.emojis.cache.forEach(em => {
            if (em.animated) {
                emojiAnimated.push(`<a:${em.name}:${em.id}>`)
                emm = emojiAnimated.join(' | ')

            } else {
                emojiNotAnimated.push(`<:${em.name}:${em.id}>`)
            }
            if (!em.animated) {
                emm = 'Aucun Emojis animés'
            }

        })
        let embed = new Discord.MessageEmbed()
            .setTitle("<:proto:859181332244463636> Voici la liste des emojis disponible sur le serveur")
            .addFields({
                name: 'Emojis animés',
                value: `${emm}`,
                inline: false
            }, {
                name: 'Emojis simples',
                value: `${emojiNotAnimated.join(" | ")}`,
                inline: false
            })
            .setColor('#820ad1')
            .setFooter("Demandé par : " + message.author.username, iconURL = message.author.avatarURL())
            .setTimestamp(Date.now());
        message.channel.send(embed)

    }
}
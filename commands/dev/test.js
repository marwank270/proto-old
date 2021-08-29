const bdd = require('../../json/bdd.json');
const { svbdd } = require('../../handler/functions.js');

module.exports = {
    name: "test",
    enabled: true,
    guild: false,
    aliases: ["essai"],
    category: "dev",
    description: "Test (fonctions multiples et variés)",
    run: async(proto, message, arg) => {

        /*if (!message.deletable) return message.react('🚮'), message.react('❌');
        if (message.deletable) message.delete();

        const helpEmbed = new Discord.MessageEmbed()
            .setAuthor("Nom de l'auteur", iconURL = proto.user.avatarURL(true))
            .setTitle(`:globe_with_meridians: Titre version \`${version}\` !`)
            .setDescription(':sheep: Description')
            .setThumbnail(message.author.avatarURL(true))
            .setColor('#820ad1')
            .addField('Nom de Field (titre)', 'contenu (valeur)\n\n \`\`\`test                                        tset\`\`\`', false)
            .addFields({ name: 'Nom de Field (titre)', value: 'contenu (valeur)\n\n \`test\`', inline: true }, { name: 'Nom de Field (titre)', value: 'contenu (valeur)\n\n \`test\`', inline: true }, { name: 'Nom de Field (titre)', value: 'contenu (valeur)\n\n \`test\`', inline: false }, { name: 'Lien d\'invitation (titre)', value: 'Lien vers [discord web](https://discord.com/app) (valeur)\n\n \`test\`', inline: false }, )
            .setImage('https://discord-france.fr/assets/img/pics/2019/11/78c05746d2a6fa3568bb190b7575c9f43617063e0a5ebff3dd491b1914832675c7e1bb31ad6627e97b285afb774933669a829cfcfe06b9cf2d3c52e57222d83a.gif')
            .setFooter(`Appelé par ${message.author.tag}`, message.author.avatarURL(true))
            .setTimestamp(Date.now());

        message.channel.send(helpEmbed);*/

        //message.reply("x), tu gratte des info sur les commande même dans mes mp ! :joy:")

        let ID = proto.guilds.cache.size

        bdd[ID];
        svbdd();
        bdd[ID] = ["key"]
        svbdd();
        bdd[ID]["key"] = "test réussi";
        svbdd();

        message.react('✅');
    }
}
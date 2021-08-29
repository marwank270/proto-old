const Discord = require('discord.js');
const { prefix, nom, version, createur, aidant, lyhne } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "dev",
    enabled: true,
    aliases: ["developpers"],
    guild: true,
    category: "info",
    description: "Obtient les infos sur mes développeurs !",
    run: async(proto, message) => {

        const mydev = new Discord.MessageEmbed()
            .setColor("#820ad1")
            .setAuthor(`${nom} ` + "v" + `${version}`, iconURL = 'https://cdn.discordapp.com/attachments/763509592943755278/859479496302133297/proto_p_v02_2k.jpg')
            .addField(':ninja: *Créé par*', `${createur} ➜ ` + '[Twitter](https://twitter.com/Marwank2204)', true)
            .addField(':technologist: *Aidé par*', `${aidant} ➜ ` + '[Twitter](https://twitter.com/Wisemar_)\n\n')
            .addField(':woman_technologist: *Aidé par*', `${lyhne} ➜ ` + '[Twitter](https://twitter.com/Lynerisss)\n\n')
            .addField(':euro: Dons Paypal :', '[Clique ici pour faire un don aux développeurs et nous aider à améliorer Proto ツ :heart:](https://www.paypal.com/paypalme/protobot)')
            .setImage('https://cdn.discordapp.com/attachments/763509592943755278/857569369596231700/proto_banner.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/763509592943755278/859479496302133297/proto_p_v02_2k.jpg')
            .setFooter("Demandé par : " + message.author.username, iconURL = message.author.avatarURL())
            .setTimestamp(Date.now());
        //message.channel.send('Mes créateurs :');
        message.channel.send(mydev);

    }
}
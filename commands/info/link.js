const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');

module.exports = {
    name: "link",
    enabled: true,
    aliases: ["lien", "invit"],
    guild: false,
    category: "info",
    description: `Renvoi le lien d'invitation de ${nom} ainsi qu'un pastebin de ses commandes`,
    run: async(proto, message) => {

        const dmlink = new Discord.MessageEmbed()
            .setTitle(":atom: Différents liens utile sur moi :")
            .setColor("#820ad1")
            .setAuthor(`Proto (v${version})`, iconURL = proto.user.avatarURL() /*"https://cdn.discordapp.com/attachments/763509592943755278/763527342500347934/Proton_sans_fond.png"*/ )
            .setDescription("\n:link: [Clique ici pour obtenir mon **lien d\'invitation**.](https://discord.com/oauth2/authorize?client_id=764872916512669749&scope=bot&permissions=8)" + //permissions=2147483647
                //'\n:bird: Twitter : [**/𝑵𝒊𝒏𝒋𝒂/#6801**](https://twitter.com/Marwank2204)\n:bird: Twitter : [**Rz Wisemar#7241**](https://twitter.com/Wisemar_)' + 
                '\n:incoming_envelope: [Clique ici pour **la liste** (non-exhaustive) **de mes commandes**.](https://pastebin.com/raw/57gv1hAH)') //trouver une solution pour écrire publiquement les commandes et les relier la.
            .setThumbnail(message.author.avatarURL())

        if (message.channel.type == "text") {
            message.author.send(dmlink);
            message.channel.send(`Ouvre tes **DM** camarade ${message.author}, je t\'y ai envoyé mes **lien utiles**.`);
        };
        if (message.channel.type === "dm") {
            message.reply(dmlink);
        };
    }


}
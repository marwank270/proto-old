const Discord = require('discord.js');
const { prefix, nom, version, idcreateur, idlynhe } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "status",
    enabled: true,
    aliases: ["sts", "presence"],
    usage: "[presence]",
    guild: true,
    category: "dev",
    permission: "BOT_OWNER",
    description: "Permet à /speedo/dev de changer le status perso du bot mais d'ou tu peux lire ca toi déjà ??",
    run: async(proto, message, arg) => {

        if (message.author.id != idcreateur && idaidant) {
            message.channel.send(':question: Attends c\'est pas pour toi ça mdrrr d\'ou tu connais même l\'existance de cette commande ? x)');
            //message.member.createDM(true).then(message => message.send('Ou as tu entendu parler de cette commande ?'))
        }
        if (message.author.id === idcreateur) {
            const Atype = arg[2];
            if (isNaN(arg[2])) Atype = 1
            const status = message.content.replace(prefix + `status ${Atype}`, "").slice(1);

            /*
            type: 

            1 => joue à
            2 => écoute
            3 => regarde

            */

            proto.user.setPresence({
                activity: {
                    name: status,
                    type: Atype,
                },
            });
            console.log(`Status du bot changé en : ${status}`);
            message.react('🥷'); //'787055567742828545'
            message.react('<:proto:859181332244463636>')
        };
        if (message.author.id === idlynhe) {
            const status = message.content.replace(prefix + "status", "");

            proto.user.setPresence({
                activity: {
                    name: status,
                    type: 1,
                },
            });
            console.log(`Status du bot changé en : ${status}`);
            message.react('🐈'); //'787055567742828545'
            message.react('<:proto:859181332244463636> ')
        };

    }
}
const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');

module.exports = {
    name: "clear",
    enabled: true,
    aliases: ["cls", "purge"],
    usage: "[1-100 | all]",
    guild: true,
    category: "Modération",
    permission: "MANAGE_CHANNELS",
    description: "Permet de supprimer entre 1 et 100 messages d'un coup",
    run: async(proto, message) => {

        let args = message.content.trim().split(/ +/g);

        if (!args[1]) return message.channel.send(stock.syntaxe.args + ` un nombre de messages : \`${prefix}clear =>[1-100]<=\`. `)
        if (args[1] == 'all') {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(stock.erreurs.permissions.channels)
                //let channelPosition = message.channel.position;

            message.channel.clone().then(c => {
                c.send(":white_check_mark: Le salon à bien été complètement nettoyé.");
            }).catch(err => {
                console.log("Une erreur est survenue lors du clonage \n" + err)
            });
            message.channel.delete();
            return;
        }
        if (!isNaN(args[1]) && args[1] >= 1 && args[1] <= 100) {
            if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(stock.erreurs.permissions.messages);

            /*if (!message.deletable) return message.channel.send(':exclamation: Les messages datants de plus de 14 jours ne peuvent pas être supprimé par plus d\'un à la fois. (c\'est relou j\'avoue mais c\'est comme ça).\n Si les messages ne sont pas aussi vieux vérifie la hiérarchie des rôles et met moi tout en haut pour ne jamais avoir d\'erreurs de permissions').then(message => {
            message.delete({ timeout: 3000 }); //Supprime le message de Proto
            }).catch(console.error);*/

            message.delete(); //Supprime en premier le message contenant la commande
            message.channel.bulkDelete(args[1]).catch(err => {
                message.reply(':exclamation: Je ne peux pas accèder et supprimer des messages datants de plus de 14 jours.');
                console.log(err);
            }); //Supprime 'args[1]' messages

            message.channel.send(`:white_check_mark: ${args[1]}` + (args[1] == "1" ? " message à bien été supprimé." : " messages ont bien été supprimés.")).then(message => {
                message.delete({ timeout: 5000 }); //Supprime le message de Proto
            }).catch(console.error);
        } else return message.channel.send(stock.syntaxe.args + ` un nombre de messages entre 1 et 100 : \`${prefix}clear =>[1-100]<=\`. `);

    }
}
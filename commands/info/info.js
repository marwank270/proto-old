const Discord = require('discord.js');
const moment = require('moment');
require("moment-duration-format");
const stock = require('../../json/stock.json');
const { horodatage, checkDays } = require('../../handler/functions.js');
const { prefix, nom, version, idcreateur, idaidant } = require('../../config.json');


module.exports = {
    name: "info",
    aliases: ["information", "whois"], //non fonctionnels actuellement
    guild: true,
    enabled: false,
    category: "info",
    description: "Affiche le maximum d'information disponible sur proto le serveur ou l'user", // doit ajouter le fields en cas de permission adéquates
    run: async(proto, message, arg) => {

        const mention = message.mentions.members.first();

        if (!arg) {

            const duration = moment.duration(proto.uptime).format(" D [jrs], H [hrs], m [mins], s [secs]");

            const protoinfo = new Discord.MessageEmbed()
                .setAuthor("Besoin d'infos sur moi ?", message.guild.iconURL())
                .setColor("#820ad1")
                .setThumbnail(message.author.displayAvatarURL(), true)
                .addField(":speaking_head: Préfix natif :", '`p.`', true)
                .addField(":card_index: Version :", '`' + `v${version}` + '`', true)
                .addField(":alarm_clock: Prochaine M.A.J de Proto ツ Prévue :", "Comming soon...")
                .addField(":1234: Présent sur :", '`' + `${proto.guilds.cache.size}` + '`' + ' serveurs.', true)
                .addField(":clock2: En ligne depuis :", `${duration}.`, true)
                .addField(":date: Créé le :", '09/10/2020 à 21h18', false)
                .addField(":ninja: Main dev :", `<@${idcreateur}>`, true)
                .addField(":mechanic: Second dev:", `<@${idaidant}>`, true)
                .addField(":books: Librairie :", "[Discord.js v12](https://discord.js.org/#/)", true)
                .addField(":link: Lien d'invitation de Proto ツ", "[Lien d'invitation de Proto ツ](https://discord.com/oauth2/authorize?client_id=764872916512669749&scope=proto&permissions=2147483647)")
                .addField(":question: Liste des commandes et leurs status :", '[Lien des commandes de Proto ツ](https://pastebin.com/57gv1hAH)')
                .setImage("https://cdn.discordapp.com/attachments/763509592943755278/857569369596231700/proto_banner.png" /*proto.user.displayAvatarURL()*/ )
                .setFooter("Demandé par : " + message.author.username, iconURL = message.author.avatarURL())
                .setTimestamp(Date.now());

            message.channel.send(protoinfo);
        }

        if (arg) {
            if (!arg[1] === 'server' || !arg[1] === 'serveur') return message.channel.send(stock.syntaxe.args + ` \`${prefix}info =>server<=\`.`);

            if (arg[1] === 'server' || arg[1] === 'serveur') {


                if (mention === undefined | mention === null) return message.channel.send(stock.syntaxe.mention + ` : \`${prefix}userinfo =>@pooptest<=\`. `);

                if (nick == null) nick = 'Aucun';
                //if (actualPresence.filter(x => x.type === "STREAMING")) { ctx = 'purple' }
                if (actualStatus == null) { ctx = 'white', s = 'Erreur de Récupération.' } else {
                    if (actualStatus == 'online') { ctx = 'green', s = 'En ligne' }
                    if (actualStatus == 'idle') { ctx = 'yellow', s = 'Innactif' }
                    if (actualStatus == 'dnd') { ctx = 'red', s = 'Ne pas déranger' }
                    if (actualStatus == 'invisible') { ctx = 'black', s = 'Hors ligne' }
                    if (actualStatus == 'offline') { ctx = 'black', s = 'Hors ligne' }
                }

                if (actualClient == null) { emj = '<a:lost_connexion:862693123514564608>', platforme = 'Déconnecté de l\'interface', cl = 'none' }
                //if (actualClient == undefined) { emj = '<a:vent_sus:863408249918455808>', platforme = 'Déconnecté', cl = 'invisible' }
                else {
                    if (actualClient.web) { emj = ':globe_with_meridians:', platforme = 'Navigateur WEB', cl = 'web' } //mobile_phone
                    if (actualClient.mobile) { emj = ':mobile_phone:', platforme = 'Téléphone', cl = 'mobile' }
                    if (actualClient.desktop) { emj = ':desktop:', platforme = 'Application', cl = 'desktop' }
                }

                if (isMuted == true) { imt = 'loud_sound', rps = 'Oui' }
                if (isMuted == false) { imt = 'mute', rps = 'Non' }

                let nick = mention.nickname;
                let colorEmbed = mention.roles.highest.color;
                let dateCrea = horodatage(mention.user.createdAt); // ajouter que si perm modifier user
                let dateArri = horodatage(mention.guild.joinedAt);
                let actualStatus = mention.user.presence.status;
                let actualClient = mention.user.presence.clientStatus; // ajouter que si perm modifier user
                let platforme; // ajouter que si perm modifier user
                let rolesCount = mention.roles.cache.size;
                let rlist = mention.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
                //let isMuted = mention.roles.cache.has(bdd[message.guild.id]["Mute_ID"]);

                const userInfo = new Discord.MessageEmbed()
                    .setAuthor(`${message.guild.name}`, iconURL = message.guild.iconURL(dynamic = true))
                    .setTitle(`Informations disponible sur ${mention.user.tag} : `)
                    .setColor(colorEmbed)
                    .setThumbnail(mention.user.displayAvatarURL()) //User.displayAvatarURL({dynamic:true}).endsWith('.gif')
                    .addField(':mailbox_with_mail: Mention :', mention, true)
                    .addField(':speaking_head: Pseudo de serveur :', nick, true)
                    .addField(':id: ID :', mention.user.id, true)
                    .addFields({ name: '\u200B', value: '\u200B', inline: false }, /* { name: '\u200B', value: '\u200B', inline: true }, */ )
                    .addField(':date: Création du compte :', `Le **${dateCrea}**`, true)
                    .addField(':clock9: Arrivée sur le serveur :', `Le ${dateArri}`, true)
                    .addField(':hourglass_flowing_sand: Présent depuis :', `${checkDays(mention.guild.joinedAt)}`, false)
                    .addFields({ name: '\u200B', value: '\u200B', inline: false }, /* { name: '\u200B', value: '\u200B', inline: true }, */ )
                    .addField(`:${ctx}_circle: Status :`, `${s} (\`${actualStatus}\`)`, true)
                    .addField(`${emj} Client discord :`, `${platforme} (\`${cl}\`)`, true) //-${platform}
                    .addField(`:${imt}: Etat du mute:`, /*rps*/ 'not now', true)
                    .addFields({ name: '\u200B', value: '\u200B', inline: false }, /* { name: '\u200B', value: '\u200B', inline: true }, */ )
                    .addField(`:performing_arts: Rôles [${rolesCount}]:`, rlist, true)
                    .addField(':rainbow: Hexa du plus haut rôle :', `\`${mention.roles.highest.hexColor}\``, true)
                    .addField(`<:nitro:863396639732400159> Serveur booster :`, mention.premiumSubscriptionCount ? 'Oui' : 'Non', true)

                message.channel.send(userInfo);
            }
        }

        if (!mention) {
            message.channel.send(stock.syntaxe.args + ` une mention ou \`server\` : \`${prefix}info @pooptest\` ou \`${prefix}info server\`  `)
        }

        if (mention) {

            if (mention === undefined) return message.channel.send(stock.syntaxe.mention + ` : \`${prefix}userinfo =>@pooptest<=\`. `);

            if (nick == null) nick = 'Aucun';
            //if (actualPresence.filter(x => x.type === "STREAMING")) { ctx = 'purple' }
            if (actualStatus == null) { ctx = 'white', s = 'Erreur de Récupération.' } else {
                if (actualStatus == 'online') { ctx = 'green', s = 'En ligne' }
                if (actualStatus == 'idle') { ctx = 'yellow', s = 'Innactif' }
                if (actualStatus == 'dnd') { ctx = 'red', s = 'Ne pas déranger' }
                if (actualStatus == 'invisible') { ctx = 'black', s = 'Hors ligne' }
                if (actualStatus == 'offline') { ctx = 'black', s = 'Hors ligne' }
            }

            if (actualClient == null) { emj = '<a:lost_connexion:862693123514564608>', platforme = 'Déconnecté de l\'interface', cl = 'none' }
            //if (actualClient == undefined) { emj = '<a:vent_sus:863408249918455808>', platforme = 'Déconnecté', cl = 'invisible' }
            else {
                if (actualClient.web) { emj = ':globe_with_meridians:', platforme = 'Navigateur WEB', cl = 'web' } //mobile_phone
                if (actualClient.mobile) { emj = ':mobile_phone:', platforme = 'Téléphone', cl = 'mobile' }
                if (actualClient.desktop) { emj = ':desktop:', platforme = 'Application', cl = 'desktop' }
            }

            if (isMuted == true) { imt = 'loud_sound', rps = 'Oui' }
            if (isMuted == false) { imt = 'mute', rps = 'Non' }

            let colorEmbed = mention.roles.highest.color;
            let dateCrea = horodatage(mention.user.createdAt); // ajouter que si perm modifier user
            let dateArri = horodatage(mention.guild.joinedAt);
            let actualStatus = mention.user.presence.status;
            let actualClient = mention.user.presence.clientStatus; // ajouter que si perm modifier user
            let platforme; // ajouter que si perm modifier user
            let rolesCount = mention.roles.cache.size;
            let rlist = mention.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
            //let isMuted = mention.roles.cache.has(bdd[message.guild.id]["Mute_ID"]);

            const userInfo = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name}`, iconURL = message.guild.iconURL(dynamic = true))
                .setTitle(`Informations disponible sur ${mention.user.tag} : `)
                .setColor(colorEmbed)
                .setThumbnail(mention.user.displayAvatarURL()) //User.displayAvatarURL({dynamic:true}).endsWith('.gif')
                .addField(':mailbox_with_mail: Mention :', mention, true)
                .addField(':speaking_head: Pseudo de serveur :', nick, true)
                .addField(':id: ID :', mention.user.id, true)
                .addFields({ name: '\u200B', value: '\u200B', inline: false }, /* { name: '\u200B', value: '\u200B', inline: true }, */ )
                .addField(':date: Création du compte :', `Le **${dateCrea}**`, true)
                .addField(':clock9: Arrivée sur le serveur :', `Le ${dateArri}`, true)
                .addField(':hourglass_flowing_sand: Présent depuis :', `${checkDays(mention.guild.joinedAt)}`, false)
                .addFields({ name: '\u200B', value: '\u200B', inline: false }, /* { name: '\u200B', value: '\u200B', inline: true }, */ )
                .addField(`:${ctx}_circle: Status :`, `${s} (\`${actualStatus}\`)`, true)
                .addField(`${emj} Client discord :`, `${platforme} (\`${cl}\`)`, true) //-${platform}
                .addField(`:${imt}: Etat du mute:`, /*rps*/ 'not now', true)
                .addFields({ name: '\u200B', value: '\u200B', inline: false }, /* { name: '\u200B', value: '\u200B', inline: true }, */ )
                .addField(`:performing_arts: Rôles [${rolesCount}]:`, rlist, true)
                .addField(':rainbow: Hexa du plus haut rôle :', `\`${mention.roles.highest.hexColor}\``, true)
                .addField(`<:nitro:863396639732400159> Serveur booster :`, mention.premiumSubscriptionCount ? 'Oui' : 'Non', true)

            message.channel.send(userInfo);
        }

        if (arg[1]) {
            if (arg[1] === "serveur" || arg[1] === "server") {

                const guild = message.guild;
                const mmbrcnt = message.guild.memberCount;
                const online = guild.members.cache.filter(member => member.user.presence.status !== "offline").size; //.cache.filter(guild.presences.status !== "online").size;//////////////////////////////// /!\ ERREUR FN IS NOT A FUNCTION /!\ \\\\\\\\\\\\\\\\\\\\\
                const prop = message.guild.ownerID;
                let guildCrea = guild.createdAt;
                let memberJoined = message.member.joinedAt;

                const serverinfo = new Discord.MessageEmbed()
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setColor("#820ad1")
                    .setThumbnail(message.author.displayAvatarURL(), true)
                    .addField(':date: Date de création', `Le ${horodatage(guildCrea)}`, true)
                    .addField(':hourglass: Durée d\'activitée', `${checkDays(message.channel.guild.createdAt)}`, true)
                    .addField(':crown: Propriétaire', `<@${prop}>`)
                    .addField(":family_man_woman_boy: Membres (Total)", `${mmbrcnt}`)
                    .addField(":green_circle: En Ligne", `${online}`, true)
                    .addField(":bust_in_silhouette: Humains", `${message.guild.members.cache.filter(member => !member.user.proto).size}`, true)
                    .addField(":roproto: protos", `${message.guild.members.cache.filter(member => member.user.proto).size}`, true)
                    .addField(":performing_arts: Rôles", `${guild.roles.cache.size}`)
                    .addField(":flag_white: Emojis serveur", `${guild.emojis.cache.size}`)
                    .addField(`${message.author.username}` + "#" + `${message.author.discriminator}` + ", tu es sur le serveur depuis :", `Le ${horodatage(memberJoined)}`)
                    .setImage(message.guild.iconURL())
                    .setFooter("Demandé par : " + message.author.username, iconURL = message.author.avatarURL())
                    .setTimestamp(Date.now());

                message.channel.send(serverinfo);
            };
        }
    }
}
/*
    by : mk270 - marwank270 - /Ninja/ - /speedo/dev#270  (one guy multiple names)
    helped by : Lynhe.dev#0112 & Rz Wisemar#7241
    
                                                                                                                                    
          d8                                                        88                        d8       88                           
        ,8P'                                                        88                      ,8P'       88                           
       d8"                                                          88                     d8"         88                           
     ,8P'  ,adPPYba,  8b,dPPYba,    ,adPPYba,   ,adPPYba,   ,adPPYb,88   ,adPPYba,       ,8P'  ,adPPYb,88   ,adPPYba,  8b       d8  
    d8"    I8[    ""  88P'    "8a  a8P_____88  a8P_____88  a8"    `Y88  a8"     "8a     d8"   a8"    `Y88  a8P_____88  `8b     d8'  
  ,8P'      `"Y8ba,   88       d8  8PP"""""""  8PP"""""""  8b       88  8b       d8   ,8P'    8b       88  8PP"""""""   `8b   d8'   
 d8"       aa    ]8I  88b,   ,a8"  "8b,   ,aa  "8b,   ,aa  "8a,   ,d88  "8a,   ,a8"  d8"      "8a,   ,d88  "8b,   ,aa    `8b,d8'    
8P'        `"YbbdP"'  88`YbbdP"'    `"Ybbd8"'   `"Ybbd8"'   `"8bbdP"Y8   `"YbbdP"'  8P'        `"8bbdP"Y8   `"Ybbd8"'      "8"      
                      88                                                                                                            
                      88                                                                                                            


version : 0.0.4

*/

/** Appel des dépendances npm et des autres fichiers */
const Discord = require('discord.js');
const dbconnect = require('./mongo.js');
const prefixes = require('./handler/prefixes.js');
const stock = require('./json/stock.json');
const { token, prefix, prefixOriginal, nom, version, idcreateur, idlynhe, devprefix } = require('./config.json');
const { webhookID, webhookToken } = require('./webhookConfig.json');

/** Création du client Discord (utile pour se connecter à Discord) */
const proto = new Discord.Client();
const webhook = new Discord.WebhookClient("868159414497062932", "3qqMF2fMpv5auCWFy5TfYQLgWXEvOTatdO_DMbIHfjdbyB3igNq4A_FmilFz8qyBgPk6"); //Discord.WebhookClient(webhookID, webhookToken);

/** Création des Collections et objets (nécessaire au stockage de données) */
proto.commands = new Discord.Collection();
proto.aliases = new Discord.Collection();

/** Appel de tous les fichiers du dossier handler */
["command"].forEach(handler => {
    require(`./handler/${handler}`)(proto)
});

/** Evènement "ready", s'exécute lorsque le bot est prêt à se connecter */
proto.once('ready', async() => {
    console.log(`\x1b[38;2;129;40;184m                                                                                                                            \x1b[0m`);
    console.log(`\x1b[38;2;129;40;184m                                                                                                                            \x1b[0m`);
    console.log(`\x1b[38;2;129;40;184m88888888ba                                                     \x1b[32m,ad8888ba,                 88  88                           \x1b[0m`);
    console.log(`\x1b[38;2;129;40;184m88      "8b                            ,d                     \x1b[32md8"'    \`"8b                88  ""                           \x1b[0m`);
    console.log("\x1b[38;2;129;40;184m88      ,8P                            88                    \x1b[32md8'        `8b               88                               \x1b[0m");
    console.log(`\x1b[38;2;129;40;184m88aaaaaa8P'  8b,dPPYba,   ,adPPYba,  MM88MMM  ,adPPYba,      \x1b[32m88          88  8b,dPPYba,   88  88  8b,dPPYba,    ,adPPYba,  \x1b[0m`);
    console.log(`\x1b[38;2;129;40;184m88""""""'    88P'   "Y8  a8"     "8a   88    a8"     "8a     \x1b[32m88          88  88P'   \`"8a  88  88  88P'   \`"8a  a8P_____88  \x1b[0m`);
    console.log(`\x1b[38;2;129;40;184m88           88          8b       d8   88    8b       d8     \x1b[32mY8,        ,8P  88       88  88  88  88       88  8PP"""""""  \x1b[0m`);
    console.log(`\x1b[38;2;129;40;184m88           88          "8a,   ,a8"   88,   "8a,   ,a8"      \x1b[32mY8a.    .a8P   88       88  88  88  88       88  "8b,   ,aa  \x1b[0m`);
    console.log(`\x1b[38;2;129;40;184m88           88           \`"YbbdP"'    "Y888  \`"YbbdP"'        \x1b[32m\`"Y8888Y"'    88       88  88  88  88       88   \`"Ybbd8"'  \x1b[0m`);
    console.log(`\x1b[38;2;129;40;184m                                                                                                                            \x1b[0m`);
    console.log(`\x1b[38;2;129;40;184m                                                                                                                            \x1b[0m`);

    /*await dbconnect().then(mongoose => { /** Connexion à la base de donnée mongoose */
    /*
            try {
                console.log(`\x1b[32mConnexion réussie\x1b[0m à la base de donnée.`);
            } catch (err) {
                console.log(err);
                console.log(`\x1b[31mEchec de la connexion\x1b[0m à la base de donnée.`);
            } finally {
                mongoose.connection.close();
                console.log('\x1b[36mConnexion\x1b[0m à la base de donnée \x1b[32mterminée avec succès\x1b[0m.');
            }
        })*/

    prefixes.loadPrefixes(proto)
    console.log(`\x1b[36mChargement des préfixes\x1b[0m \x1b[32mterminé\x1b[0m.`);

    console.log(`\x1b[36m${proto.user.tag}\x1b[0m \x1b[4mv${version}\x1b[0m est en \x1b[32mligne\x1b[0m sur \x1b[32m${proto.guilds.cache.size}\x1b[0m serveurs !`);

    proto.user.setActivity('son recodage complet', { /** Status personalisé (à animer) */
        type: 'WATCHING'
    });

    //proto.user.setStatus('invisible'); /** Connexion discrète */

    //webhook.send(`:green_circle: ${proto.user.tag} v${version} vient se connecter`); /** Gadget pour avertir de la connexion du bot directement sur discord */
});

/** Mise en ligne de Proto */
proto.login(token);

/** Evènement message */
proto.on('message', async message => {

    //const prefix = customPrefixes[message.guild.id] || prefixOriginal

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return; /** Bot qui fait la commande ? On ignore */


    const arg = message.content.trim().split(/ +/g);
    const args = message.content.slice(prefix.length).trim().split(' ').slice(1).join(' ');

    const cmd = arg[0].replace(prefix, '');
    const command = proto.commands.get(cmd) ||
        proto.commands.find(commande => commande.aliases && commande.aliases.includes(cmd));

    if (command.guild === true && message.channel.type === 'dm') {
        message.react('❌')
        message.reply(stock.syntaxe.guild);
        return;
    };
    if (command.enabled === false) return message.channel.send(':x: Commande momentanément désactivée.');
    if (!command) command = proto.commands.get(proto.aliases.get(cmd));
    if (command) command.run(proto, message, arg);
});
const dbconnect = require('../../mongo.js');
const keySchema = require('../../models/key_schema.js');
const askedKey = new Set();

module.exports = {
    name: "key",
    enabled: true,
    guild: true,
    category: "dev",
    description: "test génération de code",
    run: async(proto, message) => {

        if (askedKey.has(message.author.id)) {
            message.channel.send(":clock9: Attends, du calme ! Tu ne peux demander ta clée que toutes les 2 minutes.");
            return;
        } else {

            // the user can type the command ... your command code goes here :)

            // Adds the user to the set so that they can't talk for a minute
            askedKey.add(message.author.id);
            setTimeout(() => {
                // Removes the user from the set after a minute
                askedKey.delete(message.author.id);
            }, 120000);


            const cache = {}

            function makeid(length) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() *
                        charactersLength));
                };
                return result;
            };
            let clee = makeid(8);

            await dbconnect().then(async(mongoose) => {
                try {
                    await keySchema.findOne({ personnalKey: clee }).catch(err => {

                        new keySchema({
                            _id: message.author.id,
                            userTag: message.author.tag,
                            guildID: message.guild.id,
                            personnalKey: clee
                        });

                        message.channel.send('<@' + message.author.id + '>, Ouvre tes **DM** camarade tu viens recevoir ta clée.')
                        message.author.send(`\`User ID : ${message.author.id}\nPersonnal Key : ${clee}\`\n:warning: Attention, ce message s\'autodétruira dans 1 minute.`).then(message => { message.delete({ timeout: 60000 }) });
                        message.react('🔑');
                    })
                    console.log(`\x1b[36m${message.author.tag}\x1b[0m \x1b[4m(ID : ${message.author.id})\x1b[0m à demandé sa clée.`);
                    message.reply(`Tu as déjà demandé ta clée camarade mais je te l'envoi à nouveau en **DM**.`);
                    message.author.send(`\`User ID : ${message.author.id}\nToken : ${clee}\`\n:warning: Attention, ce message s\'autodétruira dans 1 minute.`).then(message => { message.delete({ timeout: 60000 }) });
                    message.react('🔒')
                } finally {
                    mongoose.connection.close();
                    console.log('\x1b[36mConnexion\x1b[0m à la base de donnée \x1b[32mterminée avec succès\x1b[0m.');
                }
            })

            /** 

            //if (!bdd[userID]["key"]) {
            bdd + [userID] //["key"] += clee
            svbdd();
            bdd[userID]["key"] += clee
            svbdd();
            message.channel.send('<@' + userID + '>, Ouvre tes **DM** camarade tu viens recevoir ta clée.')
            message.author.send(`\`User ID : ${userID}\nToken : ${clee}\`\n:warning: Attention, ce message s\'autodétruira dans 30 secondes.`).then(message => { message.delete({ timeout: 30000 }) });
            message.react('🔑');
            //};
            if (bdd[userID]["key"]) {
                let cleeDutilisateur = bdd[userID]["key"]
                message.reply(`Tu as déjà demandé ta clée camarade mais je te l'envoi à nouveau en **DM**.`);
                message.author.send(`\`User ID : ${userID}\nToken : ${cleeDutilisateur}\`\n:warning: Attention, ce message s\'autodétruira dans 30 secondes.`).then(message => { message.delete({ timeout: 30000 }) });
                message.react('🔒')
            };*/
        }

    }
}
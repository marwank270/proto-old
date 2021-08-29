const dbconnect = require('../../mongo.js');
const prefixSchema = require('../../models/prefix_schema.js')
const stock = require('../../json/stock.json');
const askedPrefix = new Set();

module.exports = {
    name: "setprefix",
    enabled: true,
    usage: "[prefix]",
    guild: true,
    category: "Administration",
    permission: "ADMINISTRATOR",
    description: "Permet de voir le préfixe du serveur ou de le changer.",
    run: async(proto, message, arg) => {

        let customPrefix = arg[1];

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(stock.erreurs.permissions.admin);
        if (askedPrefix.has(message.guild.id)) {
            message.channel.send(":clock9: Attends, du calme ! Tu ne peux changer de préfixe de serveur qu'une fois par minute.");
            return;
        } else {
            askedPrefix.add(message.guild.id);
            setTimeout(() => {
                askedPrefix.delete(message.guild.id);
            }, 60000);

            await dbconnect().then(async mongoose => {
                try {
                    await prefixSchema.findOneAndUpdate({
                        _id: message.guild.id
                    }, {
                        _id: message.guild.id,
                        customPrefix
                    }, {
                        upsert: true
                    })
                    message.delete();
                    message.channel.send(`<@${message.author.id}> à changé mon préfixe sur ce serveur en \`${customPrefix}\` !`)
                } finally {
                    mongoose.connection.close();
                    console.log('\x1b[36mConnexion\x1b[0m à la base de donnée \x1b[32mterminée avec succès\x1b[0m.');
                }
            })
        }

    }
}
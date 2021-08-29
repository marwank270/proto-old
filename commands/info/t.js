const { nom, version } = require('../../config.json');

module.exports = {
    name: "rep",
    aliases: ["t"],
    guild: false,
    enabled: true,
    category: "info",
    description: "Une commande de test",
    run: async(proto, message) => {

        message.channel.send("Message bien reçu patron.\n" + `${nom} ` + "`v" + `${version}` + "`" + " intercepte bien les commandes.");

    }
}
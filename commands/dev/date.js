const { horodatage } = require('../../handler/functions.js');

module.exports = {
    name: "date",
    enabled: true,
    aliases: ["datum"],
    guild: true,
    category: "dev",
    description: "Retourne la date selon différents formats",
    run: async(proto, message) => {

        const date = new Date(message.createdAt);
        message.reply(horodatage(date) + ", timestamp : " + Date.now());

    }
}
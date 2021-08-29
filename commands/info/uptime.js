const Discord = require('discord.js');
const { prefix, nom, version } = require('../../config.json');
const stock = require('../../json/stock.json');

module.exports = {
    name: "uptime",
    enabled: true,
    aliases: ["up"],
    guild: false,
    category: "info",
    description: `Permet de connaitre le temps depuis lequel ${nom} est en ligne`,
    run: async(proto, message) => {

        const moment = require("moment");
        require("moment-duration-format");
        const uptime = moment.duration(proto.uptime).format(" D [jrs], H [hrs], m [mins], s [secs]");
        message.channel.send(`En ligne depuis \`${uptime}\`.`);

    }
}
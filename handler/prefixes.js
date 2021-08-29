const mongoose = require('mongoose');
const prefixSchema = require('../models/prefix_schema.js');
const dbconnect = require('../mongo.js');

const customPrefixes = {};

module.exports.loadPrefixes = async(proto) => {
    await dbconnect().then(async mongoose => {
        try {
            for (const guild of proto.guilds.cache) {
                const guildID = guild[1].id

                const result = await prefixSchema.findOne({
                    _id: guild[1].id
                })

                //console.log('r => ' + result);

                //customPrefixes[guildID] = result.customPrefix
            }
            console.log(customPrefixes);
        } finally {
            mongoose.connection.close();
            console.log('\x1b[36mConnexion\x1b[0m à la base de donnée \x1b[32mterminée avec succès\x1b[0m.');
        }
    })
}
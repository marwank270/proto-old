const fs = require('fs');
const { readdirSync } = require('fs');
const ascii = require('ascii-table');

const table = new ascii().setHeading('Commande', 'Etat du chargement')

module.exports = (proto) => {
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith(".js"));

        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);

            if (pull.name) {
                proto.commands.set(pull.name, pull)
                table.addRow(file, '✔ Fichier chargé')
            } else {
                table.addRow(file, '❌ Il manque quelque chose')
                continue;
            }

            if (pull.aliases && Array.isArray(pull))
                pull.aliases.forEach(alias => proto.aliases.set(alias, pull.name))
        }

        console.clear();
        console.log(table.toString());
    })
}
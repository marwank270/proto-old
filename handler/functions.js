const Discord = require('discord.js');
const fs = require('fs');
const bdd = require('../json/bdd.json');
const stock = require('../json/stock.json');
//const warn = require('../json/warn.json');

module.exports = {

    // Déclaration de toutes les fonctions à utiliser plus bas
    getRandomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    },

    svbdd: function() {
        fs.writeFile('../json/bdd.json', JSON.stringify(bdd, null, 4), (err) => {
            if (err) message.channel.send(stock.erreurs.fichiers.bdd)
        });
    },

    svwarn: function() {
        fs.writeFile('../json/warn.json', JSON.stringify(warn, null, 4), (err) => {
            if (err) message.channel.send(stock.erreurs.fichiers.bdd)
        });
    },

    compteur: function(nombre) {
        let nombrePlus = parseInt(nombre);
        let nombrePlusPlus = nombrePlus += 1;
        return nombrePlusPlus
    },

    getint: function(nombre) {
        let nombreInt = parseInt(nombre);
        return nombreInt;
    },

    formatDate: function(date) {
        return new Intl.DateTimeFormat('fr-FR').format(date)
    },

    horodatage: function(date) {
        return new Intl.DateTimeFormat('fr-FR').format(date) + ', à ' + date.getHours() + ":" + date.getMinutes() + ':' + date.getSeconds();
    },

    checkDays: function(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " jour" : " jours");
    },
}
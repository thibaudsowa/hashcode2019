let fs = require('fs-extra');

exports.parse = function () {

    fs.readFile('plop.txt', 'utf-8').then(data => {
        var ligne = data.split("\n")
        var objet = {}
        objet.head=ligne[0].split(" ")
        objet.body=ligne.slice(1)
        console.log(objet)
        return objet;
    });
};

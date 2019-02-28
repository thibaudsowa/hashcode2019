let fs = require('fs-extra');

exports.parse = function (fichier) {

    fs.readFile(fichier, 'utf-8').then();

    function parse(data) {
        var ligne = data.split("\n");
        var objet = {};
        objet.nbphotos = ligne[0];
        objet.photos = ligne.slice(1).map(toPhoto);
        console.log(objet);
        return objet;

    }

    function toPhoto(ligne, index) {
        var tab = ligne.split(' ');
        var photo = {};
        photo.id = index;
        photo.verticality = tab[0];
        photo.nbTag = tab[1];
        photo.tag = {};
        photo.tagArray = tab.slice(2);
        photo.tagArray.map(tag => photo.tag[tag] = true);
        return photo
    }
};

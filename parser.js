let fs = require('fs-extra');

exports.parse = function (fichier) {

    return parse(fs.readFileSync(fichier, 'utf-8'));

    function parse(data) {
        var ligne = data.split("\n");
        var objet = {};
        objet.nbphotos = ligne[0];
        objet.photos = ligne.slice(1, ligne.length - 1).map(toPhoto);
        return objet;

    }

    function toPhoto(ligne, index) {

        var tab = ligne.split(' ');
        if (ligne.length !== 0) {
            var photo = {};
            photo.id = index;
            photo.verticality = tab[0];
            photo.nbTag = tab[1];
            photo.tag = {};
            photo.tagArray = tab.slice(2);

            photo.tagArray[photo.tagArray.length - 1]=photo.tagArray[photo.tagArray.length - 1].slice(0, photo.tagArray[photo.tagArray.length - 1].length)
            return photo
        }
    }
};

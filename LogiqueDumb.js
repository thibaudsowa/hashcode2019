var manip = require("./manipulation.js")
exports.logique = function (photos) {
    function getSlideWithMaxTag() {

    }

    let createSlides = function (horizontals, verticals) {
        var result = horizontals.map(function (photoH) {
            return {id: [photoH.id], tags: photoH.tagArray};
        });

        verticals.sort((a, b) => a.tagArray.length - b.tagArray.length);

        for (let i = 0; i < verticals.length - 1; i = i + 2) {
            var allTags = verticals[i].tagArray.concat(verticals[i + 1].tagArray);
            allTags = Array.from(new Set(allTags));
            result.push({id: [verticals[i].id, verticals[i + 1].id], tags: allTags});
        }

        return result;
    }

    function filterPhoto(photo, lettre) {
        return photo.verticality === lettre;
    }

    var horizontals = photos.photos.filter(data => filterPhoto(data, "H"))
    var verticals = photos.photos.filter(data => filterPhoto(data, "V"))

    var slides = horizontals.length + (verticals.length / 2)
    var mySlideshowHorizontal = horizontals.map(function (photo) {
        return [photo.id];
    });
    var result = []
    //choisir une slide 
    getSlideWithMaxTag()
    //parcourir 100 slides (non setté)
    //Meilleur association
    //sauvegarde result 
    //Degager la slide
    var mySlideshowVertical = [];
    for (let i = 0; i < verticals.length - 1; i = i + 2) {
        mySlideshowVertical.push([verticals[i].id, verticals[i + 1].id])
    }

    return manip.parcours(createSlides(horizontals, verticals))

};

exports.logique = function (photos) {

    function filterPhoto(photo, lettre) {
        return photo.verticality === lettre;
    }

    var horizontals = photos.photos.filter(data => filterPhoto(data, "H"))
    var verticals = photos.photos.filter(data => filterPhoto(data, "V"))

    var slides = horizontals.length + (verticals.length / 2)
    var mySlideshowHorizontal = horizontals.map(function (photo) {
        return [photo.id];
    });


    var mySlideshowVertical = [];
    for (let i = 0; i < verticals.length - 1; i = i + 2) {
        mySlideshowVertical.push([verticals[i].id, verticals[i + 1].id])
    }


    return mySlideshowVertical.concat(mySlideshowHorizontal);
};

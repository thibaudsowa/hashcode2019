exports.logiqueDumb = function (photos) {

    function filterPhoto(photo, lettre) {
        return photo.verticality;
    }

    var horizontals = photos.filter(data => filterPhoto(data, "H"))
    var verticals = photos.filter(data => filterPhoto(data, "V"))

    var slides = horizontals.length + (verticals.length / 2)
    var mySlideshowHorizontal = horizontals.map(function (photo) {
        return [photo.id];
    });
    var mySlideshowVertical = [];
    for (let i = 0; i < verticals.length - 1; i + 2) {
        mySlideshowVertical.push([verticals[i], verticals[i + 1]])
    }

    return mySlideshowVertical.concat(mySlideshowHorizontal);
};

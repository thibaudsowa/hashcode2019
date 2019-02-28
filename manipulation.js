var _ = require('lodash');

function getMaxTag(slides) {

}

function parcoursUnit(slide, tabSlide) {
    return _.maxBy(tabSlide, function (slide2) {
        var intersection = _.intersection(slide2.tags, slide.tags).length
        var tailleG = slide.tags.length - intersection;
        var tailleD = slide2.tags.length - intersection;
        return _.min([intersection, tailleG, tailleD])
    })
}

function parcours(slidesAll) {
    var current = slidesAll[0]
    var i = 0
    var result = []
    while (slidesAll.length != 0 && i < 100000 && current != null) {
        i++
        result.push(current.id)

        slidesAll = _.pullAllBy(slidesAll, [current], 'id')
        current = parcoursUnit(current, slidesAll.slice(0, 100))
        console.log(i)
    }
    
    return result


}

module.exports = {
    getMaxTag: getMaxTag,
    parcoursUnit,
    parcours: parcours
}

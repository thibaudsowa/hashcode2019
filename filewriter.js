let fs = require('fs-extra');
let logique = require('./LogiqueDumb.js')
var parser = require('./parser.js');
let mockProcess = function (type) {
    return [[1], [4, 5], [2], [6, 3]];
};

let writeInDir = function (data, dir, filename) {

    let dataString = '';

    dataString += data.length + '\n';

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            dataString += data[i][j] + ' ';
        }
        dataString = dataString.trim();

        if(i !== data.length -1) {
            dataString += '\n';
        }
    }


    fs.appendFile(dir + '/' + filename, dataString).then((err) => console.log(err));

};

exports.write = function () {

    let now = new Date().getTime();
    let dir = './output/' + now;

    fs.ensureDir(dir).then((err) => {
        console.log(err);

        writeInDir(logique.logique(parser.parse('input/A')), dir, 'A');
        writeInDir(logique.logique(parser.parse('input/B')), dir, 'B');
        /**writeInDir(logique.logique(parser.parse('input/C')), dir, 'C');
        writeInDir(logique.logique(parser.parse('input/D')), dir, 'D');
        writeInDir(logique.logique(parser.parse('input/E')), dir, 'E');**/
    });


};
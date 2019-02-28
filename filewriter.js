let fs = require('fs-extra');


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

        writeInDir(mockProcess('A'), dir, 'A');
        writeInDir(mockProcess('B'), dir, 'B');
        writeInDir(mockProcess('C'), dir, 'C');
        writeInDir(mockProcess('D'), dir, 'D');
        writeInDir(mockProcess('E'), dir, 'E');
    });


};
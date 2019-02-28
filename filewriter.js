let fs = require('fs-extra');


let writeInDir = function (data, dir, filename) {

    fs.appendFile(dir + '/' + filename, data).then((err) => console.log(err));

};

exports.write = function () {

    let now = new Date().getTime();
    let dir = './output/' + now;

    fs.ensureDir(dir).then((err) => {
        console.log(err);

        writeInDir('test', dir, 'file1');
        writeInDir('test', dir, 'file2');
        writeInDir('test', dir, 'file3');
    });


};
let fs = require('fs');
let fsextra = require('fs-extra');

exports.parse = function () {
    fs.readFile('plop.txt', 'utf-8', function (err, data) {
        console.log(data);
    });

    fsextra.readFile('plop.txt', 'utf-8').then(data => {
        return data.split(' ').for
    });
};
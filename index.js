
var sharp = require('sharp');
var fs = require('fs');
var path = require('path');

var appArgs = process.argv.slice(2);
var filePath = __dirname + '/' + appArgs[0];

if (!filePath) {
    console.log('Please pass file name...');
    return;
}

if (!fs.existsSync(filePath)) {
    console.log(filePath + ' does not exists');
    return;
}

if (fs.lstatSync(filePath).isFile()) {
    processImage(filePath);
}

function processImage(imagePath) {
    var filePathInfo = path.parse(imagePath);
    var prefix = 'img_';
    var filname1x = prefix + filePathInfo.name + filePathInfo.ext;
    var filname2x = prefix + filePathInfo.name + '@2x' + filePathInfo.ext;
    var filname3x = prefix + filePathInfo.name + '@3x' + filePathInfo.ext;
    var image = sharp(filePath)
    var image2 = sharp(filePath)
    image
        .metadata()
        .then(function(metadata) {
            image
                .toFile(filname3x);
            image
                .resize(Math.round(metadata.width * (2/3)))
                .toFile(filname2x);
            image2
                .resize(Math.round(metadata.width / 3))
                .toFile(filname1x)
        });
}


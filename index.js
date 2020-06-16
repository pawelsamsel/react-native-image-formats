
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const appArgs = process.argv.slice(2);
const filePath = __dirname + '/' + appArgs[0];

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
    const filePathInfo = path.parse(imagePath);
    const prefix = 'img_';
    const filname1x = prefix + filePathInfo.name + filePathInfo.ext;
    const filname2x = prefix + filePathInfo.name + '@2x' + filePathInfo.ext;
    const filname3x = prefix + filePathInfo.name + '@3x' + filePathInfo.ext;
    const image = sharp(filePath)
    const image2 = sharp(filePath)
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


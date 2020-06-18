# react-native-image-formats

Creates scaled versions of the input image with a prefix 'img_' and with suffixes: '@2x' amd '@3x'.


### Usage:
```
npx react-native-image-formats file.png
```
Input file: file.png (120px x 120px)

It will create 3 files: 
 - img_file@3x.png - original size (120px x 120px)
 - img_file@2x.png - 2/3 of the original size (80px x 80px)
 - img_file.png - 1/3 of the original size (40px x 40px)
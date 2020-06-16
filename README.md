# react-native-image-formats

Creates a scaled versions of input image with a prefix 'img_' and postfixed with '@2x' amd '@3x'.


### Usage:
```
npx react-native-image-formats file.png
```

It will create 3 files: 
 - img_file@3x.png - original size
 - img_file@2x.png - 2/3 of the original size
 - img_file.png - 1/3 of the original size
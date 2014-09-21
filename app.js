var fs = require('fs');
var os = require('os');
var ppm = require('ppm');
var Light = require('./index');

var light = new Light();
console.log('rendering demo world');
light.render();
saveImage();


function saveImage () {
    var image = [];
    var height = light.job.image_height;
    var width = light.job.image_width;
    var buffer = light.job.buffer;

    var str = '';
    str += 'P3' + os.EOL;
    str += width + os.EOL;
    str += height + os.EOL;
    str += '255' + os.EOL;

    for(var y = 0; y < height; ++y) {
        
        for(var x = 0; x < width; ++x) {
            var pixel = (y*width + x) * 4;

             str += buffer[pixel] + ' ';
             str += buffer[pixel + 1] + ' ';
             str += buffer[pixel + 2] + ' ';
                   
        }
        str += os.EOL;
    }

   fs.writeFileSync('image.ppm',str);
   console.log('saving image, done');
}

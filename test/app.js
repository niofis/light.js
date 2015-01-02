var fs = require('fs');
var os = require('os');
var Png = require('png').Png;
var Buffer = require('buffer').Buffer;
var Light = require('./index');

var light = new Light();
console.log('Rendering Demo World');
var t1 = process.hrtime();
light.render();
var elapsed = process.hrtime(t1);
console.log('Done in %d seconds', elapsed[0] + elapsed[1]/1e9);
console.log('Saving image...');
savePng();
//savePpm();


function savePng() {
    var height = light.job.image_height;
    var width = light.job.image_width;
    var buffer = light.job.buffer;

    var rgb_data  = new Buffer(width * height * 4);

    for(var y = 0; y < height; ++y) {
        
        for(var x = 0; x < width; ++x) {
            var pixel = (y*width + x) * 4;

             rgb_data[pixel] = buffer[pixel];
             rgb_data[pixel + 1] = buffer[pixel + 1];
             rgb_data[pixel + 2] = buffer[pixel + 2];
                   
        }
    }

    var png = new Png(rgb_data, width, height, 'rgba');
    fs.writeFileSync('./image.png', png.encodeSync().toString('binary'),'binary');
}

function savePpm () {
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
   console.log('Done');
}

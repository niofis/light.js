
var Renderer = (function () {
    var renderer = function () {
    }
})();

Renderer.prototype.render = function (job) {
    var width = job.width;
    var height = job.height;
    var buffer = job.buffer;

    for(var y = 0; y < height; ++y) {
        for(var x = 0; x < width; ++x) {
            var pixel = (y*width + x) * 4;
            buffer[pixel] = 255; //r
            buffer[pixel + 1] = 0; //g
            buffer[pixel + 2] = 0; //b
            buffer[pixel + 3] = 255; //a
        }
    }
}


exports = module.exports = Renderer;

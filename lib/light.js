var _ = require('underscore');

var renderer = require('./renderer');



var Light = ( function () {
    var light = function () {
    }
    return light;
})();


Light.prototype.render = function (job) {
    if( _.isUndefined(job) == true) {
        job = {};
        job.width = 1270;
        job.height = 720;
    }
    
    job.buffer = new Uint8Arrau(job.width * job.height * 4);


    renderer.render(job);

    return job.buffer;
}


exports = module.exports = Light;



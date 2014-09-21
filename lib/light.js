var _ = require('underscore');
var Job = require('./job');
var Material = require('./material');
var Group = require('./group');
var Sphere = require('./sphere');
var Triangle = require('./triangle');
var Color = require('./color');
var Vector3 = require('./vector3');

var Light = ( function () {
    var light = function (ops) {
        var self = this;
        
        _.defaults(self, ops);

        if(_.isUndefined(self.job) == true) {
            self.loadDemo();
        }
    }
    return light;
})();

Light.prototype.loadDemo = function () {

    var self = this;
    var job = new Job();
    var world = job.world;

    self.job = job;

    var m = world.newMaterial({color: new Color({red:1.0})});
    var g = world.newGroup({material: m});
    var s = world.newSphere({
        group: g,
        center: new Vector3(2,0,1)
    });
    var pl = world.newPointLight();



}

Light.prototype.render = function () {
    var self = this;
    var width = self.job.image_width;
    var height = self.job.image_height;
    var buffer = self.job.buffer;
    var camera = self.job.camera;
    var world = self.job.world;

    for(var y = 0; y < height; ++y) {
        for(var x = 0; x < width; ++x) {
            var pixel = (y*width + x) * 4;
            var ray = camera.getRay(x,y);
            var result = world.trace(ray);
            var c = result.color.to255();
            
           
            buffer[pixel] = c.r; //r
            buffer[pixel + 1] = c.g; //g
            buffer[pixel + 2] = c.b; //b
            buffer[pixel + 3] = c.a; //a
           
        }
    }    
}


exports = module.exports = Light;



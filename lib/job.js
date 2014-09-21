var _ = require('underscore');
var Camera = require('./camera');
var World = require('./world');

var Job = (function () {
    var job = function (ops) {
        var self = this;

        _.defaults(self, ops);
        _.defaults(self, {
            image_width: 1280,
            image_height: 720
        });
        _.defaults(self, {
            camera: new Camera({
                image_width: self.image_width,
                image_height: self.image_height}),
            world: new World(),
            buffer: new Uint8Array(self.image_width * self.image_height *4)
        });
    }

    return job;
})();

exports = module.exports = Job;

var _ = require('underscore');
var TraceResult = require('./trace_result');
var Vector3 = require('./vector3');
var Group = require('./group');

var Sphere = (function () {
    var sp = function (ops) {
        var self = this;

        _.defaults(self, ops);
        _.defaults(self, {
            center: new Vector3(),
            radius: 1.0,
            group: new Group()
        });
    }

    return sp;
})();

Sphere.prototype.intersect = function (ray, result){
    var self = this;

    var temp = ray.origin.sub(self.center);
    var a = ray.direction.dot(ray.direction);
    var b = -2.0 * temp.dot(ray.direction);
    var c = temp.dot(temp) - (self.radius * self.radius);
    var disc = (b * b) - (4.0 * c);

    result.hit = false;


    if(disc < 0) {
        return false;
    } else {
        var e = Math.sqrt(disc);
        var denom = 2.0 * a;
        var t = (b - e) / denom;

        if(t > 0.007) {
            result.hit = true;
            result.distance = t;
            result.object = self;
            return true;
        }

        t = (b + e) / denom;
        if(t > 0.007) {
            result.hit = true;
            result.distance = t;
            result.object = self;
            return true;
        }
        
        return false;
    }
}

module.exports = Sphere;

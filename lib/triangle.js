var _ = require('underscore');
var TraceResult = require('./trace_result');
var Group = require('./group');
var Vector3 = require('./vector3');

var Triangle = (function () {
    var tr = function (ops) {
        var self = this;

        _.defaults(self,ops);
        _.defaults(self,{
            pt1: new Vector3(),
            pt2: new Vector3(),
            pt3: new Vector3(),
            group: new Group()
        });
        
    }

    return tr;
})();

Triangle.prototype.intersect = function (ray, result) {
    var self = this;

    var edge1 = self.pt2.sub(self.pt1);
    var edge2 = self.pt3.sub(self.pt1);
    var pvec = ray.direction.cross(edge2);
    var det = edge1.dot(pvec);

    result.hit = false;

    if(det > -0.01 && det < 0.01) {
        return false;
    }

    var inv_det = 1.0 / det;
    var tvec = ray.origin.sub(self.pt1);
    var u = tev.dot(pvec) * inv_det;

    if(u < 0.0 || u > 1.0) {
        return false;
    }

    var qvec = tvec.cross(edge1);
    var v = ray.direction.dot(qvec) * inv_det;

    if(v < 0.0 || u + v > 1.0) {
        return false;
    }

    var t = edge2.dot(qvec) * inv_det;
    
    result.hit = true;
    result.distance = t;
    result.object = self;

    return true;
}

module.exports = Triangle;

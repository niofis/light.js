var _ = require('underscore');
var TraceResult = require('./trace_result');
var Material = require('./material');
var Group = require('./group');
var Sphere = require('./sphere');
var Triangle = require('./triangle');
var PointLight = require('./point_light');

var World = (function () {
    var world = function () {
        var self = this;

        self.objects = [];
        self.lights = [];
        self.materials = [];
        self.groups = [];
    }

    return world;
})();

World.prototype.newGroup = function (ops) {
    var self = this;
    var g = new Group(ops);

    self.addGroup(g);

    return g;
}


World.prototype.addGroup = function (g) {
    var self = this;

    self.groups.push(g);
}

World.prototype.newMaterial = function (ops) {
    var self = this;
    var m = new Material(ops);

    self.addMaterial(m);

    return m;
}

World.prototype.addMaterial = function (m) {
    var self = this;

    self.materials.push(m);
}

World.prototype.newSphere = function (ops) {
    var self = this;
    var s = new Sphere(ops);

    self.addObject(s);

    return s;
}

World.prototype.newTriangle = function (ops) {
    var self = this;
    var t = new Triangle(ops);

    self.addObject(t);

    return t;
}

World.prototype.addObject = function (obj) {
    var self = this;
    self.objects.push(obj);
}

World.prototype.newPointLight = function (ops) {
    var self = this;
    var l = new PointLight(ops);

    self.addLight(l);

    return l;
}

World.prototype.addLight = function (light) {
    var self = this;
    self.lights.push(light);
}

World.prototype.trace = function (ray) {
    var self = this;
    var closest = new TraceResult();
    var result = new TraceResult();

    _.each(self.objects, function (obj) {
        var r = obj.intersect(ray, result);

        if(result.hit == true && result.distance < closest.distance) {
            closest = result;
            closest.color = obj.group.material.color;
        }
    });
    
    return closest;
}

World.prototype.traceShadow = function (ray, max_distance) {
    var self = this;
    var rt = new TraceResult();

    for(var i = 0; i < self.objects.length; ++i) {
        var obj = self.objects[i];
        var r = obj.intersect(ray, rt);

        if(rt.hit == true && rt.distance <= max_distance) {
            return true;
        }
    }
    return false;
}

module.exports = World;

var _ = require('underscore');
var Vector3 = require('./vector3');
var Color = require('./color');

var PointLight = (function () {
    var ptl = function (ops) {
        var self = this;
        
        _.defaults(self, ops);
        _.defaults(self, {
            center: new Vector3({y: 9.0, z: -9.0}),
            color: new Color({red: 1.0, green: 1.0, blue: 1.0}),
            intensity: 100.0
        });
    }

    return ptl;
})();

module.exports = PointLight;

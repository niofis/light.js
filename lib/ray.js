var Vector3 = require('./vector3');

var Ray = (function () {
    var ray = function (origin, direction) {
        var self = this;

        self.origin = origin || new Vector3();
        self.direction = direction || new Vector3();

    }

    return ray;
})();


module.exports = Ray;

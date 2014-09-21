var _ = require('underscore');
var Vector3 = require('./vector3');
var Ray = require('./ray');

var Camera = (function () {
    var camera = function (ops) {
        var self = this;

        _.defaults(self, ops);
        _.defaults(self, {
            left_top: new Vector3(-8.0, 9.0, 0.0),
            right_top: new Vector3(8.0, 9.0, 0.0),
            left_bottom: new Vector3(-8.0, 0.0, 0.0),
            eye: new Vector3(0.0, 4.5, -5.0),
            image_width: 1280,
            image_height: 720
        });

        
    }

    return camera;
})();

Camera.prototype.getRay = function (sx, sy) {
    var self = this;
    var ray = new Ray();
    var du = self.right_top
                .sub(self.left_top)
                .divs(self.image_width)
                .muls(sx);
    var dv = self.left_bottom
                .sub(self.left_top)
                .divs(self.image_height)
                .muls(sy);



    ray.origin = self.eye.clone();
    ray.direction = self.left_top
                        .add(du)
                        .add(dv)
                        .sub(self.eye)
                        .normalize();

    return ray;
}




module.exports = Camera;

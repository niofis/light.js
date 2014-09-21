var _ = require('underscore');

var Color = (function () {
    var color = function (ops) {
        var self = this;

        _.defaults(self, ops);
        _.defaults(self, {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1.0
        });
    }

    return color;
})();

Color.prototype.to255 = function () {
    var self = this;
    var c = {};

    c.r = Math.floor(Math.min(self.red, 1.0) * 255);
    c.g = Math.floor(Math.min(self.green, 1.0) * 255);
    c.b = Math.floor(Math.min(self.blue, 1.0) * 255);
    c.a = Math.floor(Math.min(self.alpha, 1.0) * 255);

    return c;
}

module.exports = Color;

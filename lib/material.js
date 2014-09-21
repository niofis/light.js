var _ = require('underscore');
var Color = require('./color');

var Material = (function () {
    var m = function (ops) {
        var self = this;

        _.defaults(self, ops);
        _.defaults(self, {
            color: new Color()
        });
    }

    return m;
})();

module.exports = Material;

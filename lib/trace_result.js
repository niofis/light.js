var _ = require('underscore');
var Color = require('./color');

var TraceResult = (function () {
    var tr = function (ops) {
        var self = this;

        _.defaults(self, ops);
        _.defaults(self, {
            object: null,
            distance: Number.MAX_VALUE,
            point: null,
            hit: false,
            color: new Color()
        });
    }
    return tr;
})();

module.exports = TraceResult;

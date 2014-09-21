var _ = require('underscore');
var Material = require('./material');

var Group = (function () {
    var gr = function (ops) {
        var self = this;
        
        _.defaults(self, ops);
        _.defaults(self, {
            material: new Material()
        });
    }

    return gr;
})();

module.exports = Group;

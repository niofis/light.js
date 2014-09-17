
var Vector3 = (function () {
    var v3 = function (x,y,z) {
        var self = this;

        self.x = x || 0;
        self.y = y || 0;
        self.z = z || 0;
    }

    return v3;
}

Vector3.prototype.add = function (v) {
    var self = this;
    var rv = new Vector3();

    rv.x = self.x + v.x;
    rv.y = self.y + v.y;
    rv.z = self.z + v.z;
}

Vector3.prototype.sub = function (v) {
    var self = this;
    var rv = new Vector3();

    rv.x = self.x - v.x;
    rv.y = self.y - v.y;
    rv.z = self.z - v.z;
}


module.exports = Vector3;

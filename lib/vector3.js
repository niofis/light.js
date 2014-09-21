
var Vector3 = (function () {
    var v3 = function (x, y, z) {
        var self = this;
        
        self.x = x || 0;
        self.y = y || 0;
        self.z = z || 0;
    }

    return v3;
})();

Vector3.prototype.add = function (v) {
    var self = this;
    var rv = new Vector3();

    rv.x = self.x + v.x;
    rv.y = self.y + v.y;
    rv.z = self.z + v.z;
    
    return rv;
}

Vector3.prototype.sub = function (v) {
    var self = this;
    var rv = new Vector3();

    rv.x = self.x - v.x;
    rv.y = self.y - v.y;
    rv.z = self.z - v.z;

    return rv;
}

Vector3.prototype.muls = function (s) {
    var self = this;
    var rv = new Vector3();

    rv.x = self.x * s;
    rv.y = self.y * s;
    rv.z = self.z * s;

    return rv;
}

Vector3.prototype.divs = function (s) {
    var self = this;
    var rv = new Vector3();

    rv.x = self.x / s;
    rv.y = self.y / s;
    rv.z = self.z / s;

    return rv;
}

Vector3.prototype.dot = function (v) {
    var self = this;
    var s = 0;

    s += self.x * v.x;
    s += self.y * v.y;
    s += self.z * v.z;

    return s;
}

Vector3.prototype.cross = function (v) {
    var self = this;
    var rv = new Vector3();

    rv.x = self.y * v.z - self.z * v.y;
    rv.y = self.z * v.x - self.x * v.z;
    rv.z = self.x * v.y - self.y * v.x;

    return rv;
}

Vector3.prototype.normal = function () {
    var self = this;
    var n = 0;

    n += self.x * self.x;
    n += self.y * self.y;
    n += self.z * self.z;

    n = Math.sqrt(n);

    return n;
}

Vector3.prototype.normalize = function () {
    var self = this;
    var n = self.normal();

    return new Vector3(self.x/n, self.y/n, self.z/n);
}

Vector3.prototype.clone = function () {
    var self = this;
    var c = new Vector3(self.x, self.y, self.z);
    
    return c;
}


module.exports = Vector3;

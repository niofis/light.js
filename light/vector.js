'use strict';

class Vector {
  constructor(opts) {
    this.x = opts.x || 0;
    this.y = opts.y || 0;
    this.z = opts.z || 0;
  }

  norm() {
    return Math.sqrt(x*x + y*y + z*z);
  }

  normalize() {
    var n = this.norm();
    
    this.x /= n;
    this.y /= n;
    this.z /= n;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }
}

module.exports = exports = Vector;

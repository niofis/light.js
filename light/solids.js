'use strict';
var Vector = require('./vector');

class Solid {
  constructor() {
  }

  intersects(ray) {
  }
}

class Triangle extends Solid {
  constructor(opts) {
    this.u = opts.u || new Vector();
    this.v = opts.v || new Vector();
    this.w = opts.w || new Vector();
  }
}


module.exports = exports = {
  Triangle: Triangle
};

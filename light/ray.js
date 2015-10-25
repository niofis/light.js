'use strict';

class Ray {
  constructor(opts) {
    this.origin = opts.origin || new Vector();
    this.direction = opts.direction || new Vector();
  }
}

module.exports = exports = Ray;

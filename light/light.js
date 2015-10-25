'use strict';
var World = require('./world');

class Light {
  constructor() {
  }

  render(callback) {
    callback = callback || ()=>{};
    callback();
  }
}

module.exports = exports = Light;

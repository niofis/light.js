'use strict';
var World = require('./world');

class Light {
  constructor() {
  }

  render(callback) {
    callback = callback || ()=>{};
    var buffer = [];

    for(var y = 0; y < 480; ++y) {
      buffer[y] = [];
      for(var x = 0; x < 640; ++x) {
          var ray = {
            origin: {x: 0, y: 0, z: 0},
            direction: {x:0, y:0, z:0}
          };
          buffer[y][x] = 0xFF0000;
        }
    }

    callback(buffer);
  }
}

module.exports = exports = Light;

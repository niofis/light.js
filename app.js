'use strict';

var express = require('express');
var app = express();


app.use(express.static('files'));

var port = process.env.NODE_PORT || 3001
var server = app.listen(port, () => {
  var addr = server.address();
  console.log(`Web server running at http://${addr.address}:${addr.port}`);
});

var io = require('socket.io')(server);
io.on('connection', (socket) => {
  /*
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  */
 console.log('client connected!');
});

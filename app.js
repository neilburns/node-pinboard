    // app.js
     
    // A.1
    var express = require('express'),
        app = express();
        server = require('http').createServer(app),
        io = require('socket.io').listen(server);
     
    // A.2
    app.configure(function() {
        app.use(express.static(__dirname + '/public'));
    });
     
    // A.3
    server.listen(1337);

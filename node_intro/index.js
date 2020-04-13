var express = require('express');

var app = express();
var router = require('./routes/hello.js');

app.use('/',router);

var port = 3000;
app.listen(port,function() {
    console.log('Listening on port ' + port);
});


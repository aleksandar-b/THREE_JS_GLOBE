var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});


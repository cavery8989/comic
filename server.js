const express = require('express');
var app = express();
const PORT = require('./config.json').PORT;

app.use('/', express.static(__dirname + '/public'));
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});

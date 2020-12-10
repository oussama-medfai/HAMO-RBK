var express = require('express');
var bodyParser = require('body-parser');
var manager = require('./routers/manager.js');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.use('/api/manager', manager);

app.listen(8000, function() {
  console.log('listening on port 8000');
});

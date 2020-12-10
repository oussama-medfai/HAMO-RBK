var express = require('express');
var bodyParser = require('body-parser');
var auth = require('./routers/auth.js');
var user = require('./routers/user.js')

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.use('/api/auth', auth);

app.use('/api/user', user);


app.listen(8000, function() {
  console.log('listening on port 8000');
});

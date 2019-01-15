// Using express: http://expressjs.com/
var express = require('express');

// Init App
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');

// File System for loading the list of words
var fs = require('fs');

// Cors for allowing "cross origin resources"
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// var cors = require('cors');
// app.use(cors());

var routes = require('./routes/index');
var movieRoute = require('./routes/movieRoute');

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
  defaultLayout: 'layout',
  helpers: {
    inc: function (value, options) {
      return parseInt(value) + 1;
    },
    json: function (content) {
      return JSON.stringify(content);
    }
  }
}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

app.use('/', routes);
app.use('/movie', movieRoute);

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// if (process.env.OS == 'Windows_NT') {
//   require('child_process').spawn('explorer', ['http://localhost:3000']);
// }

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Application started at http://' + host + ':' + port);
}
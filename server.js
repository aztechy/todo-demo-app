'use strict';
var connect = require('connect'),
    http = require('http');

var app = connect()
  .use(connect.static('app'));
  
http.createServer(app).listen('3000');
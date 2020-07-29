var http = require('express');

//server.js 
var app = require('express')(); app.route('/hello').get(function(req, res) { 
  res.send('hello world !'); 
}); 
app.listen(8080);
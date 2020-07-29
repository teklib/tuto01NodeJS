var http = require('express');

//server.js 
var app = require('express')(); 

app.route('/hello').get(function(req, res) { 
  res.send('hello world !'); 
});

app.route('/').get(function(req, res) { 
  res.send('welcome to server on 8081'); 
});

app.listen(8081,function (){
    console.log('le serveur ecoute le port 8081')
});
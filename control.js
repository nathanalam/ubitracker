#!/usr/bin/nodejs
var express = require('express');
var path = require('path')
var app = express();


app.use("/ubi",  express.static(__dirname + '/ubi'));
app.use("/ubi/script.js",  express.static(__dirname + '/ubi/script.js'));

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/index.html'));
});

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/index.html'));
});

app.get('/listing.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/listing.html'));
});

app.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/about.html'));
});

app.get('/twitter.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/twitter.html'));
});

app.get('/listscript.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/listscript.js'));
});

var listener = app.listen(app.get('port'), function() {
  console.log( listener.address().port );
});

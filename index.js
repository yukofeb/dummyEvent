var functions = require('firebase-functions');
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var admin = require('firebase-admin');
admin.initializeApp();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = require('./libs');
app.use('/v1/', router);

exports.dummyEvent = functions.https.onRequest(app);

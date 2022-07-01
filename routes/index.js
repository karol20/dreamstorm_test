'use strict';
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
    //odczytanie zapisanej liczby wierszy w google sheets
    var obj = JSON.parse(fs.readFileSync('emails.json', 'utf8'));
    res.render('index', { records: obj.emails });
});

module.exports = router;

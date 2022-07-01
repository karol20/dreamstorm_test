'use strict';
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', function (req, res) {
    //zapisanie obecnej liczby wierszy w google sheets
    fs.writeFileSync('./emails.json', JSON.stringify(req.body))
    res.status(201).send("ok")
    
});

module.exports = router;

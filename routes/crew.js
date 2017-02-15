var express = require('express');
var router = express.Router();

var Crew = require('../models/crew');

router.post('/', function(req, res, next) {
    var crew = new Crew({
        name: req.body.name,
        age:  req.body.age
    });
    crew.save(function() {
        if(err) {
            return res.status(500).json({
                title: 'Error',
                error: err
            });
        }
        res.status(201).json({
            msg: 'Saved!',
            obj: result
        });
    });
});

module.exports = router;
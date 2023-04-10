var express = require('express');
var router = express.Router();
const { checkUsername, passwordVerification } = require('./middleware')
const exhibitorControllers = require('../controllers/exhibitors.controllers');

// Create new exhibitor
router.post('/', passwordVerification, checkUsername, function(req, res, next) {
    exhibitorControllers.create(req, res);
    res.status(201).send({
        message: 'New account made',
        state: 'success'
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();
const { getJWT, clearJWT } = require('./middleware');

// User login
router.post('/', getJWT, function(req, res) {
    res.status(200).send({message: "Success"});
})

// User logout
router.get('/logout', clearJWT, function(req, res) {
    res.status(200).send();
}), 

module.exports = router;
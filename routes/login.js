var express = require('express');
var router = express.Router();
const { getJWT } = require('./middleware');

// User login
router.post('/', getJWT, function(req, res) {
    const token = req.jwt;
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ token });
})

// User logout
router.get('/logout', function(req, res) {
    res.clearCookie('token');
    console.log("working");
    res.end();
}), 

module.exports = router;
var express = require('express');
var router = express.Router();
const { checkJWTToken, getBooth, getPublishedList, getPublishedLogos } = require("./middleware");
const exhibitorControllers = require('../controllers/exhibitors.controllers');

// Edit exhibition booth
router.get('/edit', checkJWTToken, getBooth, function(req, res, next) {
    res.send(req.booth);
})

// Get list of published exhibition booths
router.get('/', getPublishedList, function(req, res, next) {
    res.send(req.booths);
})

// Update exhibition booth
router.patch('/update', checkJWTToken, function (req, res, next) {
    exhibitorControllers.updateBooth(req, res);
})

// Get list of published logos
router.get('/logos', getPublishedList, getPublishedLogos, function(req, res, next) {
    res.send(req.logos);
})

module.exports = router;
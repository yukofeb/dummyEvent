var express = require('express');
var router = express.Router();

router.use('/event', require('./event.js'));
router.use('/events', require('./events.js'));
router.use('/reserve', require('./reserve.js'));

module.exports = router;

var express = require('express');
const echoController = require('../controller/echocontroller.js');
var router = express.Router();

router.post("/send", echoController.sendEcho);

module.exports = router;
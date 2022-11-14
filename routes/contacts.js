'use strict'

var express = require("express");

var ContactController = require("../controllers/contacts");

var router = express.Router();

router.get("/home", ContactController.home);
router.post("/saveContact", ContactController.saveContact);

module.exports = router;
'use strict'

var express = require("express");

var ProjectController = require("../controllers/projects");

var router = express.Router();

router.get("/home", ProjectController.home);
router.post("/saveP", ProjectController.saveProject);
router.get("/project/:id?",ProjectController.getProject);
router.get("/projects",ProjectController.getProjects);

module.exports = router;
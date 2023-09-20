const express = require("express");
const router = express.Router();
const studentController = require("../Controllers/studentController");
router.get("/", studentController.get);
router.post("/", studentController.post);

module.exports = router;

const express = require("express");
const router = express.Router();
const mentorController = require("../Controllers/mentorController");
router.get("/", mentorController.get);
router.post("/", mentorController.post);

module.exports = router;

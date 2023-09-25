const express = require("express");
const menstuController = require("../Controllers/menstuController");
const router = express.Router();

router.get("/", menstuController.get);
router.post("/", menstuController.post);
router.put("/", menstuController.put);

module.exports = router;

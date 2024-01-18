const express = require("express");
const router = express.Router();
const blog_controller = require("../controllers/blogController");

router.get("/", blog_controller.index);
router.get("/", blog_controller.index);

module.exports = router;

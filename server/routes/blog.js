const express = require("express");
const router = express.Router();
const blog_controller = require("../controllers/blogController");

router.get("/", blog_controller.index);
router.get("/:id", blog_controller.blog_detail);

module.exports = router;

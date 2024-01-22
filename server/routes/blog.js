const express = require("express");
const router = express.Router();
const blog_controller = require("../controllers/blogController");
const comment_controller = require("../controllers/commentController");

router.get("/", blog_controller.index);
router.get("/:id", blog_controller.blog_detail);
router.post("/:id/update", blog_controller.blog_update);

router.post("/:id/comment", comment_controller.comment_post);

module.exports = router;

const asyncHandler = require("express-async-handler");
const Comment = require("../models/comment");
const { body, validationResult } = require("express-validator");

exports.comment_post = [
  body("author", "Manufacturer must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("content", "Model must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const comment = new Comment({
      author: req.body.author,
      content: req.body.content,
      date: Date(),
      blog: req.params.id,
    });

    if (!errors.isEmpty()) {
      console.log(errors);
    } else {
      await comment.save();
      res.redirect(`http://localhost:5173/blog/${req.params.id}`);
    }
  }),
];

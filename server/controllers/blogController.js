const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog");
const Comment = require("../models/comment");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
  const blogs = await Blog.find().sort({ date: -1 }).exec();

  res.json(blogs);
});

exports.blog_detail = asyncHandler(async (req, res, next) => {
  const [blog, comments] = await Promise.all([
    Blog.findById(req.params.id).sort({ date: -1 }).exec(),
    Comment.find({ blog: req.params.id }).sort({ date: -1 }).exec(),
  ]);

  res.json({ blog: blog, comments: comments });
});

exports.blog_update = [
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("content", "Content must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
    } else {
      const blog = await Blog.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content,
      });
      res.redirect(`http://localhost:5173/admin`);
    }
  }),
];

exports.blog_toggle_publish = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, {
    published: true,
  });
  res.redirect(`http://localhost:5173/admin`);
});

exports.blog_toggle_unpublish = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, {
    published: false,
  });
  res.redirect(`http://localhost:5173/admin`);
});

exports.blog_new = [
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("content", "Content must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const publishedBool = req.body.admin === "on" ? "true" : "false";
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      published: publishedBool,
      date: Date(),
    });

    if (!errors.isEmpty()) {
      console.log(errors);
    } else {
      await blog.save();
      res.redirect(`http://localhost:5173/admin`);
    }
  }),
];

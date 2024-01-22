const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog");
const Comment = require("../models/comment");

exports.index = asyncHandler(async (req, res, next) => {
  const blogs = await Blog.find().sort({ date: -1 }).exec();

  res.json(blogs);
});

exports.blog_detail = asyncHandler(async (req, res, next) => {
  const [blog, comments] = await Promise.all([
    Blog.findById(req.params.id).sort({ date: -1 }).exec(),
    Comment.find({ blog: req.params.id }).sort({ date: -1 }).exec(),
  ]);

  console.log(comments);

  res.json({ blog: blog, comments: comments });
});

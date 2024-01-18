const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog");
const Comment = require("../models/comment");

exports.index = asyncHandler(async (req, res, next) => {
  const blogs = Blog.find().sort({ date: -1 }).exec();

  res.json({
    name: "test name",
    content: "test content",
    date: Date(),
    published: true,
  });
});

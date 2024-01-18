const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog");
const Comment = require("../models/comment");

exports.index = asyncHandler(async (req, res, next) => {
  const blogs = Blog.find().sort({ date: -1 }).exec();

  res.send("Hello from our server!");

  // res.json(blogs);
});

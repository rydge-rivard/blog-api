const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog");
const Comment = require("../models/comment");

exports.index = asyncHandler(async (req, res, next) => {
  // const blogs = Blog.find().sort({ date: -1 }).exec();
  const data = [
    {
      title: "test name one",
      content: "test content",
      date: Date(),
      published: true,
      id: 101,
    },
    {
      title: "test name two",
      content: "test content",
      date: Date(),
      published: true,
      id: 102,
    },
    {
      title: "test name three",
      content: "test content",
      date: Date(),
      published: true,
      id: 103,
    },
  ];

  res.json(data);
});

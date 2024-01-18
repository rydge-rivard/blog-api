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

exports.blog_detail = asyncHandler(async (req, res, next) => {
  // const blogs = Blog.find().sort({ date: -1 }).exec();
  // also find comments by blog id
  const data = [
    {
      title: "test name one",
      content:
        "For now, it is acceptable to just allow access from any origin. This makes development quite a bit easier but for any real project, once you deploy to a production environment you will probably want to specifically block access from any origin except your frontend website. The documentation above explains how to do this.",
      date: Date(),
      published: true,
      id: 101,
    },
  ];

  res.json(data);
});

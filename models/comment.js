const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  blog: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Comment", CommentSchema);

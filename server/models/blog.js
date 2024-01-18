const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
  published: { type: Boolean, required: true },
});

module.exports = mongoose.model("Blog", BlogSchema);

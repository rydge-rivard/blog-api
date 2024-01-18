const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
});

module.exports = mongoose.model("Admin", AdminSchema);

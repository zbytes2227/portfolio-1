const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    message: { type: String }
  },
  { collection: "all-Contacts" },
  { timestamps: true }
);

mongoose.models = {};
const Contacts = mongoose.model("Contacts", ProjectSchema);
module.exports = Contacts;
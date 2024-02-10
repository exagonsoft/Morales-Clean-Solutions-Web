const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Name is required!"],
  },
  last_name: {
    type: String,
    required: [true, "Last Name is required!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: [true, "Email already in use!"],
  },
  password: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  picture: {
    type: String,
  }
});

const User =
mongoose.models.User || mongoose.model("User", UserSchema);
module.exports = User;
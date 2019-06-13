const mongoose = require("mongoose");

const Users = mongoose.model(
  "Users",
  new mongoose.Schema({
    userName: {
      type: String,
      require: true,
      minlength: 1,
      maxlength: 50,
      unique: true
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    password: {
      type: String,
      require: true,
      minlength: 5,
      maxlength: 255
    },
    accountType: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  })
);

exports.Users = Users;

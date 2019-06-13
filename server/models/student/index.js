const mongoose = require("mongoose");

const Student = mongoose.model(
  "Student",
  new mongoose.Schema({
    firstName: {
      type: String,
      require: true,
      minlength: 1,
      maxlength: 50
    },
    lastName: {
      type: String,
      require: true,
      minlength: 1,
      maxlength: 50
    },
    qualification: {
      type: Array,
      default: []
    },
    jobsApplied: {
      type: Array,
      default: []
    },
    date: {
      type: Date,
      default: Date.now
    }
  })
);

exports.Student = Student;

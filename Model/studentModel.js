const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  mentor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mentorModel",
    },
  ],
});

module.exports = mongoose.model("student", studentSchema);

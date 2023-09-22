const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mentorId: {
    type: String,
    required: true,
  },
  Students: [
    {
      type: String,
      ref: "StudentsModel",
    },
  ],
});

module.exports = mongoose.model("mentor", MentorSchema);

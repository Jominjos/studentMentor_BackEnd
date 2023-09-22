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
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentsModel",
    },
  ],
});

module.exports = mongoose.model("mentor", MentorSchema);

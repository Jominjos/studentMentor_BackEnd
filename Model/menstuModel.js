const mongoose = require("mongoose");
const menstuSchema = new mongoose.Schema({
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("mentorstudent", menstuSchema);

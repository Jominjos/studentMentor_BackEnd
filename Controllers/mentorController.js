const mentorModel = require("../Model/mentorModel");

module.exports = {
  get: async (req, res) => {
    const dbdata = await mentorModel.find({});
    res.json(dbdata);
  },
  post: async (req, res) => {
    res.json({ message: "message from /mentor/post" });
  },
};

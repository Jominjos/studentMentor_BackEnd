const mentorModel = require("../Model/mentorModel");

module.exports = {
  get: async (req, res) => {
    const dbdata = await mentorModel.find({});
    res.json(dbdata);
  },
  post: async (req, res) => {
    const mentorData = await mentorModel.create(req.body);
    res.json(mentorData);
  },
};

const studentModel = require("../Model/studentModel");

module.exports = {
  get: async (req, res) => {
    const dbdata = await studentModel.find({});
    console.log(dbdata);
    res.json(dbdata);
  },
  post: async (req, res) => {
    const stuData = await studentModel.create(req.body);
    res.json(stuData);
  },
  put: async (req, res) => {
    res.json({ message: "student put" });
  },
};

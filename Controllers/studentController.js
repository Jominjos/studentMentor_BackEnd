const studentModel = require("../Model/studentModel");

module.exports = {
  get: async (req, res) => {
    const dbdata = await studentModel.find({});
    console.log(dbdata);
    res.json(dbdata);
  },
  post: async (req, res) => {
    res.json({ message: "from student post" });
  },
};

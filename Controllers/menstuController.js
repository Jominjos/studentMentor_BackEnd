const menstuModel = require("../Model/menstuModel");

module.exports = {
  get: async (req, res) => {
    const dbdata = await menstuModel.find({});
    res.redirect("https://www.google.com");
  },
  post: async (req, res) => {
    res.json(req);
  },
  put: async (req, res) => {
    res.json(req);
  },
};

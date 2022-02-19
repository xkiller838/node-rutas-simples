require('dotenv').config();
const usercontroller = {};

usercontroller.edit = (req, res) => {
  res.json(process.env.DB_PORT)
};

usercontroller.create = (req, res) => {
  res.json(req.body)
  
};

module.exports = usercontroller;
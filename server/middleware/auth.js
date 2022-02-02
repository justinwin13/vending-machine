const jwt = require("jsonwebtoken");
require("dotenv/config");

const authAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, process.env.SESSION_SECRET);
    req.isAdmin = decodedData?.isAdmin;
    next();
  } catch (error) {
    console.log(error);
  }
};

const authUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, process.env.SESSION_SECRET);

    req._id = decodedData?._id;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { authAdmin, authUser };

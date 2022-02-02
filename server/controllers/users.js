const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv/config");

// CREATES A USER
const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: "Email is already in use" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      balance: 0,
      isAdmin: false,
    });
    const response = await user.save();
    const token = jwt.sign(
      {
        firstName: response.firstName,
        lastName: response.firstName,
        email: response.email,
        balance: 0,
        _id: response._id,
        isAdmin: false,
      },
      process.env.SESSION_SECRET,
      { expiresIn: "2h" }
    );
    res.json({
      token,
      result: response,
      message: "Successfully created",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// AUTHENTICATE USER
const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "Email not associated with a user" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid)
      res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign(
      {
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        balance: existingUser.balance,
        _id: existingUser._id,
        isAdmin: existingUser.isAdmin,
      },
      process.env.SESSION_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      token,
      result: existingUser,
      message: "Successfully authenticated",
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// GETS A USER
const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

// UPDATE A USER
const updateUser = async (req, res) => {
  const { id, amount } = req.params;
  try {
    let user = await User.findById({ _id: id });
    if (!user) return res.status(404).json({ message: "User does not exist" });
    const newBalance = parseInt(user.balance) + parseInt(amount);
    user = await User.findByIdAndUpdate(
      { _id: id },
      { balance: newBalance },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = { signUp, signIn, getUser, updateUser };

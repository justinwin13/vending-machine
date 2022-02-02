const express = require("express");
const router = express.Router();
const { signUp, signIn, getUser, updateUser } = require("../controllers/users");
const { authUser } = require("../middleware/auth");

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.get("/:id", authUser, getUser);
router.put("/:id/:amount", authUser, updateUser);

module.exports = router;

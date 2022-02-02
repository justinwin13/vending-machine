const express = require("express");
const router = express.Router();
const {
  getSodas,
  getSoda,
  createSoda,
  updateSoda,
  updateSodaQuantity,
  deleteSoda,
} = require("../controllers/sodas");
const { authAdmin } = require("../middleware/auth");

router.get("/", getSodas);
router.get("/:id", getSoda);
router.get("/download/:id", getSoda);
router.post("/", authAdmin, createSoda);
router.put("/:id", authAdmin, updateSoda);
router.put("/:id/:amount", updateSodaQuantity);
router.delete("/:id", authAdmin, deleteSoda);

module.exports = router;

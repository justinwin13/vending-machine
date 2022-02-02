const mongoose = require("mongoose");

const SodaSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/hatchway-images/image/upload/v1643412371/gdqrdalalerdwm8k3znk.png", // A BLANK DEFAULT SODA CAN WITH COLA CO LOGO
  },
});

module.exports = mongoose.model("Sodas", SodaSchema);

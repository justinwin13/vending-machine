const { isValidObjectId } = require("mongoose");
const Soda = require("../models/Sodas");

// GETS ALL SODAS
const getSodas = async (req, res) => {
  try {
    const sodas = await Soda.find();
    res.json(sodas);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GETS SODA BY ID
const getSoda = async (req, res) => {
  const { id } = req.params;
  try {
    const soda = await Soda.findById({ _id: id });
    res.json(soda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// CREATES A SODA USING SODAS SCHEMA
const createSoda = async (req, res) => {
  if (!req.isAdmin) return res.status(401).json({ message: "Not authorized" });

  const {
    body: { productName, description, cost, quantity, image },
  } = req;
  let newImage = image;
  let soda;
  image === ""
    ? (soda = new Soda({
        productName: productName,
        description: description,
        cost: cost,
        quantity: quantity,
      }))
    : (soda = new Soda({
        productName: productName,
        description: description,
        cost: cost,
        quantity: quantity,
        image: newImage,
      }));
  try {
    const response = await soda.save();
    res.json(response);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// UPDATES AN EXISTING SODA BY ID
const updateSoda = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id))
    return res.status(404).json({ message: "Not found." });
  try {
    const soda = await Soda.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(soda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATES A SODA's QUANTITY
const updateSodaQuantity = async (req, res) => {
  const { id, amount } = req.params;
  try {
    let soda = await Soda.findById({ _id: id });
    if (!soda) return res.status(404).json({ message: "Soda does not exist" });
    if (soda.quantity < 1) return res.status(400).json({ message: "Sold out" });
    const newQuantity = soda.quantity + parseInt(amount);
    soda = await Soda.findByIdAndUpdate(
      { _id: id },
      { quantity: newQuantity },
      { new: true }
    );
    res.json(soda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETES AN EXISTING SODA BY ID
const deleteSoda = async (req, res) => {
  if (!req.isAdmin) return res.status(401).json({ message: "Not authorized" });

  const { id } = req.params;
  try {
    const soda = await Soda.findByIdAndDelete(id);
    res.json(soda);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getSodas,
  getSoda,
  createSoda,
  updateSoda,
  updateSodaQuantity,
  deleteSoda,
};

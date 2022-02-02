const mongoose = require("mongoose");
const User = require("../models/Users");
const Soda = require("../models/Sodas");
require("dotenv/config");

const DB_CONNECTION = process.env.DB_CONNECTION;
try {
  mongoose.connect(DB_CONNECTION, () => {
    console.log("Connected to database");
  });
} catch (error) {
  console.log(error.message);
}

const users = [
  new User({
    firstName: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    password: "123456",
    isAdmin: true,
  }),
  new User({
    firstName: "test",
    lastName: "user",
    email: "testUser@gmail.com",
    password: "123456",
  }),
];

const sodas = [
  new Soda({
    productName: "Fizz",
    description:
      "An effervescent fruity experience with hints of grape and coriander.",
    cost: 1,
    quantity: 100,
    image:
      "https://res.cloudinary.com/hatchway-images/image/upload/v1643805322/fgbnu4kepv3upc9wf9yq.png",
  }),
  new Soda({
    productName: "Pop",
    description: "An explosion of flavor that will knock your socks off!",
    cost: 1,
    quantity: 100,
    image:
      "https://res.cloudinary.com/hatchway-images/image/upload/v1643805322/nstusx84zc5qtsrgzwkq.png",
  }),
  new Soda({
    productName: "Cola",
    description:
      "A basic no nonsense cola that is the perfect pick me up for any occasion.",
    cost: 1,
    quantity: 200,
    image:
      "https://res.cloudinary.com/hatchway-images/image/upload/v1643805322/qpxgz0rnuwfvruovxsub.png",
  }),
  new Soda({
    productName: "Mega Pop",
    description:
      "Not for the faint of heart. So flavorful and so invigorating, it should probably be illegal.",
    cost: 1,
    quantity: 50,
    image:
      "https://res.cloudinary.com/hatchway-images/image/upload/v1643805322/ajspo3wrvlbstjs5jks4.png",
  }),
];

const seedDatabase = async () => {
  await User.insertMany(users);
  await Soda.insertMany(sodas);
};

seedDatabase().then(() => {
  console.log(`seeded sodas and users`);
  mongoose.disconnect();
});

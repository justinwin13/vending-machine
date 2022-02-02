const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const app = express();

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;
const DB_CONNECTION = process.env.DB_CONNECTION;

const sodasRoute = require("./routes/sodas");
const usersRoute = require("./routes/users");

app.use("/api/sodas", sodasRoute);
app.use("/api/users", usersRoute);

try {
  mongoose.connect(DB_CONNECTION, () => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  });
} catch (error) {
  console.log(error.message);
}

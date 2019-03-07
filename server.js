const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Bodyparser Middleware for JSON
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// DB config
mongoose
  .connect(db)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

// server running
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));

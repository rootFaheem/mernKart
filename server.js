const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

const app = express();

// Bodyparser Middleware for JSON
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// DB config
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/items", items);

// server running
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));

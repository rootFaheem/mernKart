const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Bodyparser Middleware for JSON
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

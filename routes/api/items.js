const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

//  @route  GET api/items
//  @desc   Get All Items
//  @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//  @route  POST api/items
//  @desc    Adds a item
//  @access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

module.exports = router;

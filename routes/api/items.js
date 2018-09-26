const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/items");

// GET api/items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// Post api/items
router.post("/", (req, res) => {
  const newItem = new Item({ name: req.body.name });
  newItem.save().then(item => {
    res.json(item);
  });
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id).then(item =>
    item
      .remove()
      .then(() => res.json({ success: true }))
      .catch(error => {
        res.status(404).json({ error: "Id not found" });
      })
  );
});

module.exports = router;

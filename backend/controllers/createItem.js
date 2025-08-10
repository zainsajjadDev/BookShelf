const Item = require('../models/itemModel');

exports.createItem = async (req, res) => {
  try {
    const { title, author, genre, price, stock, description } = req.body;
    const newItem = new Item({ title, author, genre, price, stock, description });
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
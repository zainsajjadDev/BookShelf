const Item = require('../models/itemModel');

exports.getAllItems = async (req, res) => {

    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.createItem = async (req, res) => {
  try {
    const { title, description, price, category, imageUrl } = req.body;
    const newItem = new Item({ title, description, price, category, imageUrl });
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Bad request', error: err.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updates = req.body;
    const updated = await Item.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Item not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Bad request', error: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

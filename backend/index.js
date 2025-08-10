const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const itemRoutes = require('./routes/itemRoutes');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/items', itemRoutes);

const PORT = 5000;
const MONGODB_URI = 'mongodb://localhost:27017/bookshelf';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err.message));

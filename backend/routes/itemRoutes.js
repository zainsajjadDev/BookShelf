const express = require('express');
const router = express.Router();


const { createItem } = require('../controllers/createItem');
const { getAllItems } = require('../controllers/getAllItems');
const { getItemById } = require('../controllers/getItemById');
const { updateItem } = require('../controllers/updateItem');
const { deleteItem } = require('../controllers/deleteItem');


router.get('/', getAllItems);  
router.get('/:id', getItemById);       
router.post('/', createItem);          
router.put('/:id', updateItem);        
router.delete('/:id', deleteItem);     

module.exports = router;

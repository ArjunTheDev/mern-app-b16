const express = require('express');
const router = express.Router();
const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} = require('../controllers/itemController');
const { requireAdmin } = require('../middleware/auth');

router.post('/', createItem);
router.get('/', getItems);
router.put('/:id', updateItem);
router.delete('/:id', requireAdmin, deleteItem);

module.exports = router;

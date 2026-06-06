const express = require('express');
const router = express.Router();
const {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getExpensesByCategory,
} = require('../controllers/expenseController');

router.post('/', createExpense);
router.get('/', getExpenses);
router.get('/category/:category', getExpensesByCategory);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;

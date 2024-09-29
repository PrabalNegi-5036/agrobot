const express = require('express');
const { getQuestions, addQuestion, updateQuestion, deleteQuestion } = require('../controllers/questionController');
const router = express.Router();

router.get('/', getQuestions);
router.post('/', addQuestion);
router.put('/:id', updateQuestion);
router.delete('/:id', deleteQuestion);

module.exports = router;

const Question = require('../models/questionModel');

const processNLU = async (req, res) => {
  const { query } = req.body;
  try {
    const question = await Question.findOne({ question: new RegExp(query, 'i') });
    if (question) {
      return res.json({ answer: question.answer });
    } else {
      return res.json({ answer: 'Sorry, I do not understand your question.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {processNLU}

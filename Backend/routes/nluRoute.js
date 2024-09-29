const express = require('express');
const { processNLU } = require('../controllers/nluController');
const router = express.Router();

router.post('/', processNLU);

module.exports = router;

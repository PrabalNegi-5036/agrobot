const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoute');
const questionRoutes = require('./routes/questionRoute');
const nluRoutes = require('./routes/nluRoute');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: '*', // Or '*' to allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true // If you're sending cookies, set to true
}));
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/nlu', nluRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const searchRoutes = require('./routes/searchRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// const helmet = require('helmet');
// app.use(helmet());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);
app.use('/api', searchRoutes);

sequelize.sync().then(() => {
  console.log('Database connected');
});

module.exports = app;

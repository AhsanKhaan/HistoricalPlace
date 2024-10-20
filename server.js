const express = require('express');
require('dotenv').config();
const connectDB = require('./db');
const swaggerSetup = require('./swagger');

const app = express();

app.use(express.json({ extended: false }));

// connect db
connectDB();

// routes


// Swagger setup
swaggerSetup(app);

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is runing ${PORT}`));

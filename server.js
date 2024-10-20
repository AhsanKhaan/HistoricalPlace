const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./db');
const swaggerSetup = require('./swagger');
const rateLimit = require('express-rate-limit');
const app = express();

app.use(express.json({ extended: false }));

// Determine the frontend URL based on environment
const frontendURL = process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL_PROD : process.env.FRONTEND_URL_LOCAL;
console.log('frontendURL', frontendURL);
// Configure CORS
app.use(cors({ origin: frontendURL,credentials: true }));
// connect db
connectDB();

// Define the rate limit rule
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Rate limit exceeded. Please try again later.',
    headers: true,
  });
  
  // Apply the rate limit to all requests
  app.use('/api/', apiLimiter);
// routes
app.use('/api/places', require('./routes/places'));

// Swagger setup
//swaggerSetup(app);

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is runing ${PORT}`));

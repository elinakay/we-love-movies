// Require Express, Dotenv, and Cors
if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Add this line
const app = express();

// Require the routers
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");

// Require the error handling functions
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

// Use Express
app.use(express.json());

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// Use the routers
app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

// Use the error handling functions
app.use(notFound);
app.use(errorHandler);

module.exports = app;


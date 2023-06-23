// Import required modules
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// Set the port number
const port = 3000 || process.env.PORT;

// Import routers and middleware
const router = require("./routers/index");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");

// Set up middleware
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(helmet()); // Add security headers
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(xss()); // Prevent cross-site scripting attacks
app.use(mongoSanitize()); // Sanitize user-supplied data to prevent MongoDB injection attacks

app.use(express.json()); // Parse JSON request bodies

// Mount the router
app.use("/api", router);

// Error handling middleware
app.use(notFoundMiddleware); // Handle 404 errors
app.use(errorMiddleware); // Handle other errors

// Start the server
const start = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();

module.exports = app; // Export the app for testing or other modules to use

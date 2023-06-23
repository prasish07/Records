// Import required modules
const { StatusCodes } = require("http-status-codes");

// Define error handling middleware function
const errorHandlerMiddleware = (err, req, res, next) => {
  // Set default error object
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };

  // Send response with the custom error status code and message
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

// Export the error handling middleware function
module.exports = errorHandlerMiddleware;

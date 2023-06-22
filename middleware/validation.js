// Import required modules
const { StatusCodes } = require("http-status-codes");
const { fromZodError } = require("zod-validation-error");

// Define validation middleware function
const validationMiddleware = (schema) => (req, res, next) => {
  try {
    // Parse and extract the body data using the provided schema
    const parsedData = schema.parse({
      body: req.body,
    });
    const { body } = parsedData;

    // Replace the request body with the parsed body
    req.body = body;

    // Move to the next middleware
    next();
  } catch (err) {
    // Handle validation errors
    const error = fromZodError(err);

    // Send a response with a 400 Bad Request status and error message
    res.status(StatusCodes.BAD_REQUEST).json({ msg: error.message });
  }
};

// Export the validation middleware function
module.exports = validationMiddleware;

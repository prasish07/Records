// Define a custom API error class
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Export the CustomAPIError class
module.exports = CustomAPIError;

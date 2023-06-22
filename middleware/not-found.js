const { StatusCodes } = require("http-status-codes");

//If the api is not found
const notFound = (req, res) =>
  res.status(StatusCodes.NOT_FOUND).send("Route does not exist");

module.exports = notFound;

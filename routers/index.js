// Import the records router
const recordRouter = require("./records.router");

// Create the main router
const mainRouter = require("express").Router();

// Mount the records router under the /v1 route
mainRouter.use("/v1", recordRouter);

// Export the main router
module.exports = mainRouter;

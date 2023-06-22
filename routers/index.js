const recordRouter = require("./records.router");

const mainRouter = require("express").Router();

mainRouter.use("/v1", recordRouter);

module.exports = mainRouter;

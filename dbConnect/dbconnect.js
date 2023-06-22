// Import required modules
const { Sequelize } = require("sequelize");

// Database connection configuration
const dbName = process.env.NAME;
const dbUser = process.env.USER;
const dbPassword = process.env.PASSWORD;
const dbHost = "localhost";
const dbPort = process.env.DATABASEPORT;

// Create a Sequelize instance for the database connection
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: "mysql",
});

// Asynchronous function to authenticate and synchronize models with the database
(async () => {
  try {
    // Authenticate the database connection
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Synchronize models with the database
    await sequelize.sync();
    console.log("Models synchronized with the database.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// Export the sequelize instance
module.exports = sequelize;

// Import required modules
const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect/dbconnect");

// Define the "record" model
const record = sequelize.define("Records", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Export the "record" model
module.exports = record;

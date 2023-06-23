// Import required modules
const { StatusCodes } = require("http-status-codes");
const customError = require("../error/customError");
const Record = require("../models/record.model");

// Create new record
const createRecords = async (req, res) => {
  const { name, email, number } = req.body;
  try {
    // Check if required fields are provided
    if (!name | !email || !number) {
      throw new customError(
        "Please provide name, email and phone number",
        StatusCodes.BAD_REQUEST
      );
    }
    // Create a new record in the database
    const record = await Record.create({ name, email, number });
    res.status(StatusCodes.CREATED).json({ status: true, record });
  } catch (error) {
    if (error instanceof customError) {
      throw new customError(error.message, error.statusCode);
    }
    throw new customError(
      "Failed to create new records",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

// To get all the records present in database
const getAllRecords = async (req, res) => {
  try {
    const records = await Record.findAll();
    res.status(StatusCodes.OK).json({ status: true, records });
  } catch (error) {
    throw new customError(
      "Failed to get all records",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

// To get single record by unique id
const getSingleRecord = async (req, res) => {
  const { id: recordId } = req.params;
  try {
    // Find the record by primary key
    const record = await Record.findByPk(recordId);
    // Send error if not found
    if (!record) {
      throw new customError("Record not found", StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json({ status: true, record });
  } catch (error) {
    if (error instanceof customError) {
      throw new customError(error.message, error.statusCode);
    }
    throw new customError(
      "Record fetch failed",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

// Update the record with unique id
const updateRecord = async (req, res) => {
  const { id: recordId } = req.params;
  try {
    // Find the record by primary key
    const record = await Record.findByPk(recordId);
    // Send error if not found
    if (!record) {
      throw new customError("Record not found", StatusCodes.NOT_FOUND);
    }
    // Update the record of database
    const updatedRecord = await record.update(req.body);
    res.status(StatusCodes.OK).json({ status: true, updatedRecord });
  } catch (error) {
    if (error instanceof customError) {
      throw new customError(error.message, error.statusCode);
    }
    throw new customError(
      "Record update failed",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

// Remove the record from the database by unique id
const removeRecord = async (req, res) => {
  const { id: recordId } = req.params;
  try {
    const record = await Record.findByPk(recordId);
    if (!record) {
      throw new customError("Record not found", StatusCodes.NOT_FOUND);
    }
    // waiting for the record to be destroy
    await record.destroy();
    res
      .status(StatusCodes.OK)
      .json({ status: true, msg: "Record deleted successfully" });
  } catch (error) {
    if (error instanceof customError) {
      throw new customError(error.message, error.statusCode);
    }
    throw new customError(
      "Record remove failed",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

//search with particular name or email
const searchRecords = async (req, res) => {
  const { name, email } = req.query;

  try {
    // Construct the search conditions based on the provided query parameters
    const searchConditions = {};
    if (name) {
      searchConditions.name = name;
    }
    if (email) {
      searchConditions.email = email;
    }
    // Execute the database query with the search conditions
    const records = await Record.findAll({
      where: searchConditions,
    });

    res.json({ status: true, records });
  } catch (error) {
    console.error("Failed to search records:", error);
    res.status(500).json({ error: "Failed to search records" });
  }
};

// export
module.exports = {
  createRecords,
  getAllRecords,
  getSingleRecord,
  updateRecord,
  removeRecord,
  searchRecords,
};

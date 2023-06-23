// Import required modules
const router = require("express").Router();
const {
  createRecords,
  getAllRecords,
  getSingleRecord,
  updateRecord,
  removeRecord,
  searchRecords,
} = require("../controllers/record.controller");
const validationMiddleware = require("../middleware/validation");
const {
  recordDataSchema,
  updateRecordDataSchema,
} = require("../helper/recordData.validation");

router.route("/record/search").get(searchRecords);

// Define routes for record operations
router
  .route("/record")
  .post(validationMiddleware(recordDataSchema), createRecords) // Create a new record
  .get(getAllRecords); // Get all records

router
  .route("/record/:id")
  .get(getSingleRecord) // Get a single record by ID
  .patch(validationMiddleware(updateRecordDataSchema), updateRecord) // Update a record by ID
  .delete(removeRecord); // Delete a record by ID

module.exports = router; // Export the router

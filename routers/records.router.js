const router = require("express").Router();
const {
  createRecords,
  getAllRecords,
  getSingleRecord,
  updateRecord,
  removeRecord,
} = require("../controllers/record.controller");
const validationMiddleware = require("../middleware/validation");
const {
  recordDataSchema,
  updateRecordDataSchema,
} = require("../helper/recordData.validation");

router
  .route("/record")
  .post(validationMiddleware(recordDataSchema), createRecords)
  .get(getAllRecords);

router
  .route("/record/:id")
  .get(getSingleRecord)
  .patch(validationMiddleware(updateRecordDataSchema), updateRecord)
  .delete(removeRecord);

router.route("/record/:id");

module.exports = router;

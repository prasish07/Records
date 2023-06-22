// Import required modules
const { z } = require("zod");

// Define recordDataSchema using Zod
const recordDataSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    number: z
      .string()
      .min(10, "Phone number cannot be less than 10")
      .max(10, "Phone number cannot be more than 10"),
  }),
});

// Define updateRecordDataSchema using Zod
const updateRecordDataSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    number: z
      .string()
      .min(10, "Phone number cannot be less than 10")
      .max(10, "Phone number cannot be more than 10")
      .optional(),
  }),
});

// Export the schemas
module.exports = { recordDataSchema, updateRecordDataSchema };

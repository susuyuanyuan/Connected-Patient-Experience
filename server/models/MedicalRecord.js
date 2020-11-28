let mongoose = require("mongoose");

let medicalRecordSchema = mongoose.Schema(
  {
    // unit in cm
    height: {
      type: Number,
      required: false,
    },
    // unit in kg
    weight: {
      type: Number,
      required: false,
    },
    // unit in mg/dL
    HDL: {
      type: Number,
      required: false,
    },
    // uint in mg/dL
    LDL: {
      type: Number,
      required: false,
    },
    // unit in mmHg
    BP: {
      type: Number,
      required: false,
    },
  },
  { collection: "patients" }
);

let MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

module.exports = [medicalRecordSchema, MedicalRecord];

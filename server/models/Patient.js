let mongoose = require("mongoose");
let genderValues = ["M", "F", "NA"];

let medicalRecordSchema = mongoose.Schema({
  // unit in cm
  height: Number,
  // unit in kg
  weight: Number,
  // unit in mg/dL
  HDL: Number,
  // uint in mg/dL
  LDL: Number,
  // unit in mmHg
  BP: Number,
});

let patientSchema = mongoose.Schema(
  {
    photo: {
      type: String,
    },
    name: {
      type: String,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: genderValues,
      required: true,
    },
    doctorId: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    medicalRecords: {
      type: [medicalRecordSchema],
    },
  },
  { collection: "patients" }
);

let Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;

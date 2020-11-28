let mongoose = require("mongoose");
let genderValues = ["M", "F", "NA"];
let medicalRecordSchema = require("./MedicalRecord");

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

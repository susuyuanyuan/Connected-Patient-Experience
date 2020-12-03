let mongoose = require("mongoose");
let genderValues = ["M", "F", "NA"];

let patientSchema = mongoose.Schema(
  {
    photo: String,
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
    doctorName: String,
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    labResults: [
      {
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
      },
    ],
    medicalRecords: [
      {
        conditionName: { type: String, required: true },
        recordedDate: { type: Date, required: true },
        note: String,
      },
    ],
    messages: [
      {
        subject: { type: String, required: true },
        content: { type: String, required: true },
        date: { type: Date, required: true },
      },
    ],
    prescriptions: [
      {
        drugName: String,
        quantity: Number,
        requestDate: Date,
      },
    ],
  },
  { collection: "patients" }
);

let Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;

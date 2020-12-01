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
    medicalRecords: {
      type: [
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
    },
    messages: [
      {
        subject: String,
        content: String,
      },
    ],
    Pharmacy: [
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

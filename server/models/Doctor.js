let mongoose = require("mongoose");
let genderValues = ["M", "F", "NA"];

let doctorSchema = mongoose.Schema(
  {
    photo: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: genderValues,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    qualification: {
      type: [String],
    },
  },
  { collection: "patients" }
);

let Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;

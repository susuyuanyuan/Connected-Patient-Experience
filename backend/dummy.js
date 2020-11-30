const Patient = require("./models/Patient");

const mongoose = require("mongoose");
const faker = require("faker");

let mongoUrl = "mongodb://localhost:27017/patients";

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(mongoose.connection.readyState);

// first drop all data
Patient.collection.drop();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let genderValues = ["M", "F", "NA"];

let promises = [];

for (let i = 0; i < 10; i++) {
  let newPatientJson = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.phoneNumberFormat(),
    sex: genderValues[getRandomInt(0, genderValues.length)],
    medicalRecords: [
      {
        height: getRandomInt(160, 200),
        weight: getRandomInt(40, 100),
        HDL: getRandomInt(30, 70),
        LDL: getRandomInt(20, 210),
        BP: getRandomInt(70, 120),
      },
    ],
  };
  promises.push(Patient.create(newPatientJson));
}

let adminUser = {
  name: "admin",
  email: faker.internet.email(),
  password: "admin",
  phone: faker.phone.phoneNumberFormat(),
  sex: genderValues[getRandomInt(0, genderValues.length)],
  medicalRecords: [],
};

for (let i = 0; i < 10; i++) {
  adminUser["medicalRecords"].push({
    height: getRandomInt(160, 200),
    weight: getRandomInt(40, 100),
    HDL: getRandomInt(30, 70),
    LDL: getRandomInt(20, 210),
    BP: getRandomInt(70, 120),
  });
}

promises.push(Patient.create(adminUser));

Promise.all(promises).then((values) => {
  console.log(values);
  console.log("Finished");
});

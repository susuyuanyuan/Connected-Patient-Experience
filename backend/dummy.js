const Patient = require("./models/Patient");

const mongoose = require("mongoose");
const faker = require("faker");

let mongoUrl = "mongodb://localhost:27017/patients";
// let mongoUrl =
// "mongodb+srv://group-project:Ka6V91u9Bm9g2Doo@cluster0.bf6rf.mongodb.net/patients?retryWrites=true&w=majority";

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

let medicalConditionList = [
  "Hypertension",
  "Hyperlipidemia",
  "Diabetes",
  "Back pain",
  "Anxiety",
  "Obesity",
  "Allergic rhinitis",
  "Reflux esophagitis",
  "Respiratory problems",
  "Hypothyroidism",
  "Visual refractive errors",
  "General medical exam",
  "Osteoarthritis",
  "Fibromyalgia / myositis",
  "Malaise and fatigue",
  "Pain in joint",
  "Acute laryngopharyngitis",
  "Acute maxillary sinusitis",
  "Major depressive disorder",
  "Acute bronchitis",
  "Asthma",
  "Depressive disorder",
  "Nail fungus",
  "Coronary atherosclerosis",
  "Urinary tract infection",
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

for (let i = 0; i < 10; i++) {
  let newPatientJson = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.phoneNumberFormat(),
    sex: genderValues[getRandomInt(0, genderValues.length)],
    labResults: [
      {
        height: getRandomInt(160, 200),
        weight: getRandomInt(40, 100),
        HDL: getRandomInt(30, 70),
        LDL: getRandomInt(20, 210),
        BP: getRandomInt(70, 120),
      },
    ],
    medicalRecords: [],
  };

  let shuffledId = shuffle(
    Array.from(Array(medicalConditionList.length).keys())
  );

  for (let j = 0; j <= getRandomInt(1, 5); j++) {
    newPatientJson["medicalRecords"].push({
      conditionName: medicalConditionList[shuffledId[j]],
      recordedDate: new Date(),
    });
  }

  if (i == 0) {
    newPatientJson.name = "admin";
    newPatientJson.password = "admin";
  }

  promises.push(Patient.create(newPatientJson));
}

Promise.all(promises).then((values) => {
  console.log(values);
  console.log("Finished");
});

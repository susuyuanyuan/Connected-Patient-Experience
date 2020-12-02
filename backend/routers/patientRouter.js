let patientRouter = require("express").Router();
let Patient = require("../models/Patient.js");

function Authenticate(req, res) {
  Patient.findOne(
    {
      name: req.query.username,
      password: req.query.password,
    },
    (err, doc) => {
      if (err) {
        console.error(
          "Failed to find user: " + req.query.username + " because" + err
        );
        res.status(500).send(err);
      } else {
        res.json(doc);
      }
    }
  );
}

function FindById(id, res) {
  Patient.findById(id, (err, doc) => {
    if (err) {
      console.error("Failed to find user: " + id + " because" + err);
      res.status(500).send(err);
    } else {
      res.json(doc);
    }
  });
}

patientRouter.get("/", (req, res) => {
  if (req.query.id) {
    FindById(req.query.id, res);
    return;
  }

  if (req.query.username && req.query.password) {
    Authenticate(req, res);
  } else {
    res.status(500).send("Invalid query params");
  }
});

patientRouter.post("/message", async (req, res) => {
  try {
    const input = req.body;
    if (
      !input ||
      !input.message ||
      !input.message.subject ||
      !input.message.content ||
      !input.message.date ||
      !input.userId
    ) {
      res.status(500).send("Invalid input data");
      return;
    }
    const patient = await Patient.findById(input.userId);
    patient.messages.push(input.message);
    const result = await patient.updateOne({ messages: patient.messages });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

patientRouter.post("/setDoctorName", async (req, res) => {
  try {
    const input = req.body;
    if (!input || !input.doctorName || !input.userId) {
      res.status(500).send("Invalid input data");
      return;
    }
    const patient = await Patient.findById(input.userId);
    patient.doctorName = input.doctorName;
    const result = await patient.updateOne({ doctorName: patient.doctorName });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

patientRouter.post("/addPrescription", async (req, res) => {
  try {
    const input = req.body;
    if (!input || !input.prescription || !input.userId) {
      res.status(500).send("Invalid input data");
      return;
    }
    const patient = await Patient.findById(input.userId);
    patient.prescriptions.push(input.prescription);
    const result = await patient.updateOne({
      prescriptions: patient.prescriptions,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

patientRouter.post("/removePrescriptions", async (req, res) => {
  try {
    const input = req.body;
    if (!input || !input.prescriptionIds || !input.userId) {
      res.status(500).send("Invalid input data");
      return;
    }

    const patient = await Patient.findById(input.userId);
    const idSet = new Set(input.prescriptionIds);
    const newPrescriptions = patient.prescriptions.filter((prescription) => {
      return !idSet.has("" + prescription._id);
    });

    const result = await patient.updateOne({
      prescriptions: newPrescriptions,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = patientRouter;

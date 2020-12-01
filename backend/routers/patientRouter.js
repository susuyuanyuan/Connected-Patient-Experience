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

patientRouter.get("/", (req, res) => {
  if (req.query.username && req.query.password) {
    Authenticate(req, res);
  } else {
    res.status(500).send("Invalid query params");
  }
});

async function UpdateUserMessage(req, res) {
  const input = req.body;
  if (
    !input ||
    !input.message ||
    !input.message.subject ||
    !input.message.content ||
    !input.userId
  ) {
    res.status(500).send("Invalid input data");
  }
  const patient = await Patient.findById(input.userId);
  patient.messages.push(input.message);
  const result = await patient.updateOne({ messages: patient.messages });
  res.sendStatus(200);
}

patientRouter.post("/message", (req, res) => {
  try {
    UpdateUserMessage(req, res);
  } catch (err) {
    res.status(500).send("Update message failed due to: " + err);
  }
});

module.exports = patientRouter;

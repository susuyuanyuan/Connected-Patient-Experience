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
  }
  res.status(500).send("Invalid query params");
});

module.exports = patientRouter;

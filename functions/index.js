const functions = require('firebase-functions');
const admin = require("firebase-admin");
const express = require("express");
const { body, validationResult } = require('express-validator/check');
const randomNumber = require("random-number");
const zeroFill = require("zero-fill");

const app = admin.initializeApp(functions.config().firebase);
const locationApi = makeLocationApi(app.database());
exports.locations = functions.https.onRequest(locationApi);

function makeLocationApi(database) {
  const api = express();
  api.get("/", (req, res) => {
    database.ref("locations").child(req.query.passcode).once("value").then(function (snapshot) {
      const location = snapshot.val();
      if (location !== null) {
        res.json({"location": location});
      } else {
        res.status(404).end();
      }
    }).catch(function (error) {
      console.error(error);
      res.status(500).end();
    });
  });
  api.post("/", [
    body("location.latitude", "").custom((value) => /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/.test(value)),
    body("location.longitude").custom((value) => /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/.test(value))
  ], (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const onetimeAccessNumber = zeroFill(4, randomNumber({min: 0, max: 9999, integer: true}));
      database.ref("locations").child(onetimeAccessNumber).set(req.body.location);
      res.json({"passcode": onetimeAccessNumber});
    } else {
      console.log(errors.mapped());
      res.status(400).end();
    }
  });
  return api;
}

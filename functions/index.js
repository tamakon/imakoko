const functions = require('firebase-functions');
const admin = require("firebase-admin");
const express = require("express");
const check = require('express-validator/check');
const randomNumber = require("random-number");
const zeroFill = require("zero-fill");
const moment = require("moment");
const config = require("./config");

const api = express();
const app = admin.initializeApp(config.firebase());
api.use("/api/locations", makeLocationsApi(app.database()));
exports.api = functions.https.onRequest(api);

function makeLocationsApi(database) {
  const api = express();
  api.get("/", [
    check.query("passcode").custom((value) => /^[0-9]{4}$/.test(value))
  ], (req, res) => {
    const errors = check.validationResult(req);
    if (errors.isEmpty()) {
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
    } else {
      res.status(400).end();
    }
  });
  api.post("/", [
    check.body("location.latitude").custom((value) => /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/.test(value)),
    check.body("location.longitude").custom((value) => /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/.test(value))
  ], (req, res) => {
    const errors = check.validationResult(req);
    if (errors.isEmpty()) {
      const onetimeAccessNumber = zeroFill(4, randomNumber({min: 0, max: 9999, integer: true}));
      database.ref("locations").child(onetimeAccessNumber).set({
        "latitude": req.body.location.latitude,
        "longitude": req.body.location.longitude,
        "create_at": moment().format("YYYYMMDDHHmmss")
      }).then(function () {
        res.json({"passcode": onetimeAccessNumber});
      }).catch(function (error) {
        console.error(error);
        res.status(500).end();
      });
    } else {
      res.status(400).end();
    }
  });
  return api;
}

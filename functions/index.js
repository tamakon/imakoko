const functions = require('firebase-functions');
const admin = require("firebase-admin");
const express = require("express");
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
  api.post("/", (req, res) => {
    const onetimeAccessNumber = zeroFill(4, randomNumber({min: 0, max: 9999, integer: true}));
    database.ref("locations").child(onetimeAccessNumber).set(req.body.location);
    res.json({"passcode": onetimeAccessNumber});
  });
  return api;
}

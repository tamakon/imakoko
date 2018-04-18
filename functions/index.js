const functions = require('firebase-functions');
const admin = require("firebase-admin");
const express = require("express");
const randomNumber = require("random-number");
const zeroFill = require("zero-fill");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://imakoko-daf3c.firebaseio.com",
  databaseAuthVariableOverride: {
    uid: "function-service-worker"
  }
});
exports.locations = functions.https.onRequest(makeLocationApi(admin.database()));

function makeLocationApi(database) {
  const app = express();
  app.get("/", (req, res) => res.send({"location": "TODO"}));
  app.post("/", (req, res) => {
    const onetimeAccessNumber = zeroFill(4, randomNumber({min: 0, max: 9999, integer: true}));
    database.ref("locations").child(onetimeAccessNumber).set(req.body.location);
    res.send({"passcode": onetimeAccessNumber});
  });
  return app;
}

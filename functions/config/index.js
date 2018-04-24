require('dotenv').config();

module.exports.firebase = function firebase () {
  return {
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: {
      uid: process.env.FIREBASE_DATABASE_AUTH_UID
    }
  };
};

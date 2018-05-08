require("dotenv").config();
const SlackWebhook = require('slack-webhook');

const slack = new SlackWebhook(process.env.SLACK_WEBHOOK_URL);
console.log("notify to slack...");
slack.send({
  "username": "Firebase",
  "text": "Firebase has deployed. " + process.env.API_ROOT,
  "icon_emoji": ":firebase:",
  "channel": "#random"
}).then(console.log).catch(console.error);

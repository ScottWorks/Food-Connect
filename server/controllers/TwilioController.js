const axios = require('axios');
require('dotenv').load();

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_NUMBER } = process.env;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

module.exports = {
  sendTwilioMessage: (req, res, next) => {
    const dbInstance = req.app.get('db');

    const { phoneNumber, message } = req.body;

    console.log(message);

    client.messages
      .create({
        body: message,
        from: TWILIO_NUMBER,
        to: phoneNumber
      })
      .then((message) => {
        console.log(`Success: ${message}`);
        next();
      })
      .catch((err) => {
        console.log(`Server Error while sending SMS: ${err}`);
        res.sendStatus(500);
      })
      .done();
  }
};

const axios = require('axios');
require('dotenv').load();

const {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_NUMBER
} = process.env;


const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

module.exports = {
    sendTwilioMessage : (req, res) => {
        const dbInstance = req.app.get('db');

        const {phoneNumber} = req.params;
        const {message} = req.body;
        
        client.message.create(
            {
                body: message,
                from: TWILIO_NUMBER,
                to: phoneNumber
            }
        ).then(message => {
            console.log(`Success: ${message}`);
            res.status(200).send(message);
        }).catch(err => {
            console.log(`Server Error while sending SMS: ${err}`);
            res.sendStatus(500);
        }).done();
    }
}

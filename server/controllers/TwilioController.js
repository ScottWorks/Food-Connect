const axios = require('axios');
const {
    sid,
    authToken
} = process.env
let client = require('twilio')(sid, authToken)

module.exports = {
    sendTwilioMessage : (req, res) => {
        const dbInstance = req.app.get('db');

        const {phoneNumber} = req.params;
        const {message} = req.body;
        
        client.message.create(
            {
                body: 'TEST',
                from: `+17205838708`,
                to: `+13033496264`
            }
        ).then(message => console.log(message.sid)).done();
       
    }
}


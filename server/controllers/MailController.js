const nodemailer = require('nodemailer');
require('dotenv').load();
const emailValidate = require('../../src/config/generalUtil');

const {
    EMAIL_USER,
    EMAIL_PW
} = process.env


module.exports = {
    sendEmail : (req, res) => {
        const {toEmail, fromEmail, subject, message}  = req.body
        if(!emailValidate.validateEmail((fromEmail))){
            res.status(500).send('Server Error');
        } else {
        const smtpTransport = nodemailer.createTransport({

            service: "Gmail",
            auth : {
                user : EMAIL_USER,
                pass: EMAIL_PW
            }
        })

        const mailOptions={
            from: fromEmail,
            to: toEmail,
            subject: subject,
            text: message
        }

        smtpTransport.sendMail(mailOptions, (error, response) => {
            if(error) {
                console.log(error);
            } else {
                res.status(200).send(response);
            }
        })}
    }
}
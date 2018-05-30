const nodemailer = require('nodemailer');
require('dotenv').load();

const {
    EMAIL_USER,
    EMAIL_PW
} = process.env


module.exports = {
    sendEmail : (req, res) => {
        const {toEmail, fromEmail, subject, message}  = req.body
        const smtpTransport = nodemailer.createTransport({
            // TODO:
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
                res.satus(200).send(response);
            }
        })
    }
}
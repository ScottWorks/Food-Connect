// Required
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const massive = require('massive');
const dotenv = require('dotenv');
const session = require('express-session');
const twilioController = require('./controllers/TwilioController');
const s3Controller = require('./controllers/S3Controller');
const mailController = require('./controllers/MailController')
dotenv.config();
const { SERVER_PORT, CONNECTION_STRING, SECRET_SESSION } = process.env; //.env Deconstructor

const nonProfitController = require('./controllers/NonProfitController');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

// Sessions
app.use(
  session({
    secet: SECRET_SESSION,
    resave: false,
    saveUninitialized: true
  })
)

massive(CONNECTION_STRING)
  .then((dbInstance) => {
    app.set('db', dbInstance);
  })
  .catch((e) => console.log(`Error: ${e}`));

// ##### ENDPOINTS ######

// AUTH ENDPOINTS
app.get('/api/auth/me');
app.get('/api/auth/login');
app.get('/api/auth/logout');
app.get('/api/auth/register');

// LANDING ENDPOINTS
app.get('/api/statistics');

// BUSINESS ENDPOINTS
// Business Basket-Endpoints
app.get('/api/basket/:businessID', BusinessController.getBusinessBaskets);
app.get('/api/basket');
app.put('/api/basket/:basketID', BusinessController.updateBusinessBasket);
app.post('/api/basket', BusinessController.createBaskets);
app.delete('/api/basket/:basketID', BusinessController.deleteBusinessBasket);

// Busines Endpoints
app.get('/api/business/', BusinessController.getBusinessInfo);
app.post('/api/business');
app.put('/api/business/:businessID', BusinessController.updateBusinessInfo);

// NON-PROFIT ENDPOINTS
// Non-Profit Basket Endpoints
app.get('/api/basket', nonProfitController.getBaskets);
// app.put('/api/basket/:basketID', nonProfitController.updateBasket);

// Non-Profit Wishlist Endpoints
app.get('/api/wishlist/:nonProfitID');
app.post('/api/wishlist/:nonProfitID');
app.put('/api/wishlist/:nonProfitID');
app.delete('/api/wishlist/:nonProfitID');

// TWILIO
app.post('/api/twilio/:phoneNumber', twilioController.sendTwilioMessage);


// AMAZON S3
// Requires a body with the filename & filetype
app.post('/api/amazon/uri', s3Controller.sign);

/*
 * Requires the Basket ID parameter
 * Requires a body that contains the signed uri & file & file type
 */
app.put('/api/amazon/upload/:basketID', s3Controller.upload)

// NODEMAILER
// Requires a body with toEmail, fromEmail, subject, and message
app.post('/api/email', mailController.sendEmail)

app.listen(SERVER_PORT, () => {
  console.log(`Creeping on Port: ${SERVER_PORT}`);
});

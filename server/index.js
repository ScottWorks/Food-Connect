// Required
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const massive = require('massive');
const dotenv = require('dotenv');
const session = require('express-session')
const twilioController = require('./controllers/TwilioController')
dotenv.config();
const { SERVER_PORT, CONNECTION_STRING, SECRET_SESSION } = process.env; //.env Deconstructor

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
app.get('/api/basket/:businessID');
app.get('/api/basket');
app.put('/api/basket/:basketID');
app.post('/api/basket');
app.delete('/api/basket/:basketID');

// Busines Endpoints
app.get('/api/business/');
app.post('/api/business');
app.put('/api/business/:businessID');

// NON-PROFIT ENDPOINTS
// Non-Profit Basket Endpoints
app.get('/api/basket');
app.put('/api/basket/:basketID');

// Non-Profit Wishlist Endpoints
app.get('/api/wishlist/:nonProfitID');
app.post('/api/wishlist/:nonProfitID');
app.put('/api/wishlist/:nonProfitID');
app.delete('/api/wishlist/:nonProfitID');

// TWILIO
app.post('/api/twilio/:phoneNumber', twilioController.sendTwilioMessage)

app.listen(SERVER_PORT, () => {
  console.log(`Creeping on Port: ${SERVER_PORT}`);
});

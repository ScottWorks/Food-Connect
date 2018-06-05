// Required
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const massive = require('massive');
const dotenv = require('dotenv');
const session = require('express-session');
dotenv.config();
const checkForSession = require('./middlewares/checkForSessions');
const inLine = require('./middlewares/middlewares')

// Controllers
const twilioController = require('./controllers/TwilioController'),
  s3Controller = require('./controllers/S3Controller'),
  mailController = require('./controllers/MailController'),
  BusinessController = require('./controllers/BusinessController'),
  nonProfitController = require('./controllers/NonProfitController'),
  authController = require('./controllers/authController'),
  analyticsController = require('./controllers/analyticsController'),
  generalController = require('./controllers/GeneralController');

const { SERVER_PORT, CONNECTION_STRING, SECRET_SESSION } = process.env; //.env Deconstructor

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

// Sessions
app.use(
  session({
    secret: SECRET_SESSION,
    resave: false,
    saveUninitialized: true
  })
);

app.use(checkForSession);

// ##### ENDPOINTS ######

// AUTH ENDPOINTS
app.get('/api/auth/me', authController.validate);
app.post('/api/auth/login', authController.login);
app.get('/api/auth/logout', authController.logout);
app.post('/api/auth/register', authController.register);

// LANDING ENDPOINTS
app.get('/api/statistics/baskets', analyticsController.getAllCompletedBaskets);

// BUSINESS ENDPOINTS
// Business Basket-Endpoints
app.get(
  '/api/basket/:businessID/:epochTime',
  BusinessController.getBusinessBaskets
);
app.get(
  '/api/all/basket/:businessID',
  analyticsController.getBussinessCompletedBaskets
); // USE TO PULL ALL BASKETS TO RUN STATS
app.put('/api/basket/:basketID', BusinessController.updateBusinessBasket);
app.post('/api/basket', BusinessController.createBaskets);
app.delete('/api/basket/:basketID', BusinessController.deleteBusinessBasket);

// Busines Endpoints
app.get('/api/business/', BusinessController.getBusinessInfo);
app.post('/api/business');
app.put('/api/business/:businessID', BusinessController.updateBusinessInfo);

// NON-PROFIT ENDPOINTS
// Non-Profit Basket Endpoints
app.get(
  '/api/scheduled/baskets/:nonProfitID',
  nonProfitController.getScheduledBaskets
);
app.post('/api/basket/:currentLocalTime', nonProfitController.getBaskets);
app.put('/api/basket/update/:nonProfitID', nonProfitController.scheduleBasket); // TESTING ONLY!
// app.put(
//   '/api/basket/update/:nonProfitID',
//   twilioController.sendTwilioMessage,
//   nonProfitController.scheduleBasket
// );
app.put('/api/basket/cancel/:basketID', nonProfitController.cancelBasket); // TESTING ONLY!
// app.put(
//   '/api/basket/cancel/:basketID',
//   twilioController.sendTwilioMessage,
//   nonProfitController.cancelBasket
// );

// Non-Profit Wishlist Endpoints
app.get('/api/wishlist/:nonProfitID', nonProfitController.getWishList);
app.post('/api/wishlist/:nonProfitID', nonProfitController.createWishList);
app.put(
  '/api/wishlist/modify/:nonProfitID',
  nonProfitController.modifyWishList
);

// TWILIO
app.post('/api/twilio', twilioController.sendTwilioMessage);

// AMAZON S3
// Requires a body with the filename & filetype
app.post('/api/amazon/uri', s3Controller.sign);

// Requires a body that contains the signed uri & file & file type
app.put('/api/amazon/upload', s3Controller.upload); // TODO:
/*
 * Requires the Basket ID parameter
 * Requires a body that contains the signed uri & file & file type
 */
app.put('/api/amazon/upload/:basketID', s3Controller.upload);

// NODEMAILER
// Requires a body with toEmail, fromEmail, subject, and message
app.post('/api/email', mailController.sendEmail);

massive(CONNECTION_STRING).then((dbInstance) => {
  app.set('db', dbInstance);
  app.listen(SERVER_PORT, () =>
    console.log(`Creeping on Port: ${SERVER_PORT}`)
  );
});

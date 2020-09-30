const functions = require('firebase-functions');
// + we gonna build an express app and host it in cloud function
const express = require('express');
// secret key for backend
// public key for front-end
const stripe = require('stripe')(
  'sk_test_51H9Mt3L8CQXeA7glxl2zYwVRAml0sSqnaHrYp5RTMTnbtdc6ZnPI0EZdDN1dm4Cz8QMViJbFD4dCFfnk0B3HzX1800FjyZCGd5'
);
const cors = require('cors');

// + App Config
const app = express();

// + Middlewares
app.use(
  cors({
    origin: true,
  })
);
// get req.body data and convert to js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// + API routes
app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.post('/payment/create', async (req, res) => {
  // /payment/create?total=150 total amount = total
  const { total } = req.query;

  console.log('total amount >>>', total);

  // payment information
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // 201 created
  res.status(201).json({ clientSecret: paymentIntent.client_secret });
});

// * back end express app to run on cloud functions
// we exporting an api like that cloud function know that we have an api
// when the event onRequest is done
// exports == module.exports
exports.api = functions.https.onRequest(app);

// +  run the server :  firebase emulators:start

// * Our API endpoint
// +  functions[api]: http function initialized (http://localhost:5001/clone-8670a/us-central1/api)

// + http://localhost:4000/functions
// all the logs from cloud functions

//  it serves also hosted files
// hosting: Serving hosting files from: build
// +  hosting: Local server: http://localhost:5000

// console.log(exports);

// * Deploy just the cloud functions
// back-end = cloud functions
// + firebase deploy --only functions

// front-end
// hosting = front-end
// + firebase deploy --only hosting

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

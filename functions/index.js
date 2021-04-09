const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
    "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"
);



//API:




//App Config
const app = express();




//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());



//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))




app.post('/payments/create', async (request, response) => {
    const total = request.query.total;



    console.log('Payement Request Received Boom!!! for this amount >>>', total)


    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "use",
    });
    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})




//Listen command 
exports.api = functions.https.onRequest(app)


//TO RUN THE SERVER USE THIS IN THE CMD :firebase emulators:start

//Example endpoint
//http://localhost:5001/project-13bc4/us-central1/api


const { Configuration, OpenAIApi } = require('openai');
const fs = require("fs");
const express = require("express");



// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const cartRoutes = express.Router();

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;



    // Read the JWT access token from the authorization header


    const jwt = require("jsonwebtoken");

process.env.USERFRONT_JWT_PUBLIC_KEY =  `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAz7PT03GAZ9M1ePuyZSkI
DoA7Qu5gIYQNS10PUMYgU93NnkKH+FzMdo7kZBN4sJw9yHpHcPB7wcXcLJu2iU7e
dgeFpnTAqt67ILRDVum9TVzB6Q9frdrILaXxA/JKS5kMC4JNOpAHHpYJAkWkFzJI
4iI5DYET/fn0OVOkg5IVYLA//KZyTx4uLE1WepaT3fmejX69FALlLrXrLnBYMW26
/lRALX0UQhbjp74lvKgVW7vJ8swp7PDevkipr66+L5fWbqBQfuGfrdzwNT9jKnyQ
AhrPYJ8PqAxe0rlImVEOR9NJS8wllhKEkKKe5GPFOMJMqU+grmdaFcREszU64UPV
chcvk06GDpCa+U2db/BzMF5ezLdE1g1zCvP+G/BneynAIOuPvzR10+IcXQBtoHWR
s67i0mMJywkzLzIGmErDL8fw2AXu4jS9Tcs9P6Yjj/BafaqzPTzpOWI0l6zDN+gs
XMwFcllVDjw3x9Pd5hfHcPtrdqEMnGqSb1eNsF+ZZQ5T0nDMXSiCIour2MSmpgsZ
na2cj3V7VCiPccpY+Gby0XEvpTxFxQh0/oeRLJPj+9O+sPnn6dTuSavpPVAXdwpI
idwR5RtdiJPboHQ93acwRlO4XnVMOw/fylMhsEMLO06MFnyyJtouUZJlSbB8r+9t
cqcVVSE551iRlm7Jin+HAwECAwEAAQ==
-----END PUBLIC KEY-----`;

// This section will help you get a list of all the records.
cartRoutes.route("/shoppingcart").get(function (req, res) {

  const accessToken = req.headers.authorization.replace("Bearer ", "");

  // Verify the token using the account's JWT public key
  const verifiedPayload = jwt.verify(
    accessToken,
    process.env.USERFRONT_JWT_PUBLIC_KEY,
    { algorithms: ["RS256"] }
  );
    console.log(verifiedPayload.userId)
    let db_connect = dbo.getDb("employees");
    db_connect
      .collection("shoppingcart")
      .find({userId: verifiedPayload.userId})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  // This section will help you get a list of all the records.
cartRoutes.route("/endpoint").get(function (req, res) {



  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("images")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

    
// This section will help you create a new record.
cartRoutes.route("/shoppingcart/save").post(function (req, response) {
  
    console.log(req.headers.authorization)
    const accessToken = req.headers.authorization.replace("Bearer ", "");
  
    // Verify the token using the RSA public key
    const verifiedPayload = jwt.verify(
      accessToken,
      process.env.USERFRONT_JWT_PUBLIC_KEY,
      { algorithms: ["RS256"] }
    );
      console.log(req.body)

    let db_connect = dbo.getDb();
    let myobj = {
      url: req.body.imageUrl,
      quantity: req.body.quant,
      col: req.body.col,
      size: req.body.size,
      price:  req.body.price,
      priceId: req.body.priceId,
      userId: verifiedPayload.userId,
    };
    //authenticateToken(req,response)
    console.log("db console")
    console.log(myobj)
    console.log(verifiedPayload)
    db_connect.collection("shoppingcart").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  
  });


  cartRoutes.route("/purchase/save").post(function (req, response) {
  
    console.log(req.headers.authorization)
    const accessToken = req.headers.authorization.replace("Bearer ", "");
  
    // Verify the token using the RSA public key
    const verifiedPayload = jwt.verify(
      accessToken,
      process.env.USERFRONT_JWT_PUBLIC_KEY,
      { algorithms: ["RS256"] }
    );
      console.log(req.body)

    let db_connect = dbo.getDb();
    let myobj = {
      req: req.body,
      userId: verifiedPayload.userId,
    };
    //authenticateToken(req,response)
    console.log("db console")
    console.log(myobj)
    console.log(verifiedPayload)
    db_connect.collection("purchases ").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  
  });

// This section will help you delete a record



cartRoutes.route("/shoppingcart/delete").delete((req, response) => {
    

    console.log(req.body.imageUrl)
    let db_connect = dbo.getDb();
    let myquery = { url:  req.body.imageUrl };

    db_connect.collection("shoppingcart").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });


cartRoutes.route("/shoppingcart/empty").delete((req, response) => {

  console.log(req.headers.authorization)
  const accessToken = req.headers.authorization.replace("Bearer ", "");

  // Verify the token using the RSA public key
  const verifiedPayload = jwt.verify(
    accessToken,
    process.env.USERFRONT_JWT_PUBLIC_KEY,
    { algorithms: ["RS256"] }
  );

    let db_connect = dbo.getDb();
    let myquery = { userId:  verifiedPayload.userId };

    db_connect.collection("shoppingcart").remove(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });
    
  
cartRoutes.route("/checkout").post(async function (req, response) {

  console.log(req.body.price)



  
//Select price ID



console.log("stripe funktion")
        const stripe = require('stripe')('sk_test_51MzR8NCnJhjWx3stASa6tFB7VTxb20iDNPHMyEvSDLifB7Kgr21ci02sTITZAXqf2y1XI0Gv1EX4uGBkwPBAd5wi00qhEuctT6');
        const session = await stripe.checkout.sessions.create({
          shipping_address_collection: {
            allowed_countries: ['SE'],
          },
          line_items: req.body,
          mode: 'payment',
          success_url: `${'http://localhost:3000'}?success=true`,
          cancel_url: `${'http://localhost:3000/shoppingcart'}?canceled=true`,
        });
      
        response.json({url: session.url});
        // response.redirect(303, session.url);


  });


module.exports = cartRoutes;
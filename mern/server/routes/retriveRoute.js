const { Configuration, OpenAIApi } = require('openai');
const fs = require("fs");
const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const retriveRoutes = express.Router();

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
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
retriveRoutes.route("/retrive").get(function (req, res) {

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
      .collection("images")
      .find({userId: verifiedPayload.userId})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  retriveRoutes.route("/retrive/delete").delete((req, response) => {
    

    console.log(req.body.imageUrl)
    let db_connect = dbo.getDb();
    let myquery = { url:  req.body.imageUrl };

    db_connect.collection("images").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });

module.exports = retriveRoutes;
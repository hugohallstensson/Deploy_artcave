const { Configuration, OpenAIApi } = require('openai');
const fs = require("fs");
const express = require("express");
const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
  cloud_name: "dsser57e8",
  api_key: "985438846289424",
  api_secret: process.env.CLOUD,
});

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const imageRoutes = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const jwt = require("jsonwebtoken");

process.env.USERFRONT_JWT_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
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


// This section will generate a image.
imageRoutes.route("/image/create").post(async function (req, response) {

    const prompt =  req.body.prompt;
    console.log("test")

    // const result = await openai.createImage({
    //     prompt,
    //     n: 1,
    //     size: "1024x1024",
    // })
    
    try {
      const result = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
      });
  
      const url = result.data.data[0].url
      const imgResult = await fetch(url);
      const blob = await imgResult.blob();
      const buffer = Buffer.from( await blob.arrayBuffer())
      tempFileUrl = Date.now()
      fileUrl = `./${tempFileUrl}.png`
      fileUrl2 = `../client/public/${tempFileUrl}.png`


      fs.writeFileSync(`../client/public/${tempFileUrl}.png`, buffer);
      
      const res = cloudinary.uploader.upload(fileUrl2, {public_id: "olympic_flag"})

      res.then((data) => {
        console.log(data);
        console.log(data.secure_url);
      }).catch((err) => {
        console.log(err);
      });

      const url2 = cloudinary.url("olympic_flag", {
      });

      console.log(url2)

      

      response.status(200).json({
        success: true,
        data: url2,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
  
      response.status(400).json({
        success: false,
        error: 'The image could not be generated',
      });
    }
  });

// This section will help you get a list of all the records.
imageRoutes.route("/retrive/create").get(function (req, res) {
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
imageRoutes.route("/image/save").post(function (req, response) {
  
  console.log(req.headers.authorization)
  const accessToken = req.headers.authorization.replace("Bearer ", "");

  // Verify the token using the RSA public key
  const verifiedPayload = jwt.verify(
    accessToken,
    process.env.USERFRONT_JWT_PUBLIC_KEY,
    { algorithms: ["RS256"] }
  );
  let date = new Date().toString()
  date = date.slice(4,16)
console.log(req.body)
  let db_connect = dbo.getDb();
  let myobj = {
    url: req.body.imageUrl,
    userId: verifiedPayload.userId,
    date: date,
    prompt: req.body.prompt.prompt
  };
  //authenticateToken(req,response)
  console.log("db console")
  console.log(myobj)
  console.log(verifiedPayload)
  db_connect.collection("images").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });

});

// Node.js example (Express.js)

// const jwt = require("jsonwebtoken");

// function authenticateToken(req, res, next) {
//   // Read the JWT access token from the request header
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401); // Return 401 if no token

//   // Verify the token using the Userfront public key
//   jwt.verify(token, "xbpg9gdn", (err, auth) => {
//     if (err) return res.sendStatus(403); // Return 403 if there is an error verifying
//     req.auth = auth;
//     next();
//   });
// }



module.exports = imageRoutes;

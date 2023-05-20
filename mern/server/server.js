const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config({path:__dirname+'/.env'})
const port = process.env.PORT || 5000;


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/imageRoute"));
app.use(require("./routes/retriveRoute"));
app.use(require("./routes/userRoute"));
app.use(require("./routes/cartRoute"));
app.use(express.static('public'));
app.use(allowCrossDomain);
// get driver connection
const dbo = require("./db/conn");


app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});

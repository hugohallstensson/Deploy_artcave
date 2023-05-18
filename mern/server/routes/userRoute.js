// MERN = Mongo + Express + React + Node

// Development = Node.js server + React server

// MEN

// E - Express

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const userRoute = express.Router();
//mongoose.connect('mongodb+srv://hugohallstensson:Huggan000124@webapp.mtfcuqg.mongodb.net/?retryWrites=true&w=majority')

userRoute.post('/api/register', async (req, res) => {
	console.log(req.body)
//	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)


    let myobj = {
      name: req.body.name,
			email: req.body.email,
			password: newPassword,
    };

    let db_connect = dbo.getDb();
     console.log("db console")
      console.log(myobj)
    db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });

    console.log("ok")
		res.json({ status: 'ok' })
	// } catch (err) {
	// 	res.json({ status: 'error', error: 'Duplicate email' })
	// }
})

userRoute.post('/api/login', async (req, res) => {
	
  let db_connect = dbo.getDb();

  db_connect
    .collection("users")
    .find({email: req.body.email})
    .toArray(async function (err, result) {
      if (err) throw err;
      
        //Check if exist
      console.log(req.body.password)
      console.log(result[0].password)
  //check if password ok
	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		result[0].password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: result[0].name,
				email: result[0].email,
			},
			'secret123'
		)
      console.log("success backend")
		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}


    });


})



module.exports = userRoute;
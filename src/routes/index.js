const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const userRouter = require('../routes/user.js');
const walletRouter = require('../routes/wallet.js');

const app= express()         
var port = process.env.PORT || 8080  // establecemos nuestro puerto

//middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

//routes
app.use(userRouter, walletRouter);

app.listen(port)
console.log('API escuchando en el puerto ' + port)
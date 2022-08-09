const express = require("express")
const dotenv = require ("dotenv").config()
const asyncHandler = require('express-async-handler')
const app = express();
const port =process.env.PORT || 5000
const Form =  require ('./models/formModels')
const connectDB = require('./config/db');
const cors = require('cors');


app.use(cors())

connectDB ()

const setForm = asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error('Please add a text field')
    }
  
    const form = await Form.create({
      text: req.body.text,
    
    })
  
    res.status(200).json(form)
  })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.post('/', setForm)
app.listen(port,() => console.log("started a server"))
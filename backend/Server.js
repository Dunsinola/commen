const express = require("express")
const dotenv = require ("dotenv").config()
const asyncHandler = require('express-async-handler')
const app = express();
const port =process.env.PORT || 5000
const Form =  require ('./models/formModels')
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path')
connectDB ()


app.use(cors({origin:'*'}))

const getForm= asyncHandler(async (req, res) => {
  const forms = await Form.find();

  res.status(200).json(forms); 
})


const setForm = asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error('Please add a text field')
    }
  
    const form = await Form.create({
      text: req.body.text,
      email: req.body.email,
      message: req.body.message,
    
    })
  
    res.status(200).json(form)
  })
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', setForm)
app.get('/user', getForm)

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('*', (req, res)  =>
	res.sendFile(path.resolve(__dirname, '../', 'frontend' ,'build' , 'index.html')))

app.listen(port,() => console.log("started a server"))
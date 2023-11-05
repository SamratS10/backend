require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const app = express()
const MONGO_URL = process.env.MONGO_URL
app.use(express.json())

app.use('/',productRoute)

mongoose.
connect(MONGO_URL)
.then(()=>{
    console.log('connected')
    app.listen(9000,()=>console.log("server is running at 9000"))

}).catch((err)=>{
    console.log(err)
})
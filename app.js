const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const morgan = require("morgan")
const dotenv = require('dotenv')
const app = express()
const userRouter = require('./router/user')

dotenv.config()

const apis = process.env.API_URL
const mongoURI = process.env.DBCONNECT

app.use(cors());
app.use(express.json())
app.use(morgan("dev"));
app.use(`${apis}`, userRouter)


app.get('/moty', (req, res) => {
    res.send('helo world')
})


//configuring the database
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('connected to the database') }).catch((err) => {
    // console.log('not connect to db')
    console.log(err)
})


app.listen(process.env.PORT || 3000)
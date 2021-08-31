const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const fs = require('fs')
const app = express()

dotenv.config()

const apis = process.env.API_URL
const mongoURI = process.env.DBCONNECT

app.use(cors());
app.use(express.json())
    // app.use(morgan("dev"));


fs.readdirSync("./router").map((r) =>
    app.use(`${apis}`, require(`./router/${r}`))
)


app.get('/', (req, res) => {
    res.send('helo world')
})


//configuring the database
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('connected to the database') }).catch((err) => {
    // console.log('not connect to db')
    console.log(err)
})


app.listen(process.env.PORT || 3000)
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const env = require('dotenv').config()
const bodyParser = require("body-parser")
const profileRoute = require("./routes/route-dogProfile.js")
const timeRoute = require("./routes/route-dogBusinessTime.js")



app.use(cors())
app.use(bodyParser.json())
app.use(morgan("dev"))
app.use("/dogProfile", profileRoute)
app.use("/businessTime", timeRoute)

module.exports = app
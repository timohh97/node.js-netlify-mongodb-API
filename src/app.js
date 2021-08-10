const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/get");
const bodyParser = require("body-parser")
const cors = require("cors")
const serverless = require("serverless-http")

app.use(bodyParser.json())
app.use("/.netlify/functions/app",routes)
app.use(cors())
app.use(express.static("dist"))

mongoose.connect("mongodb+srv://mainuser:test@cluster.0gtou.mongodb.net/rest?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true },() =>
{
    console.log("Connected to database.")
})

module.exports.handler = serverless(app);



app.listen(3000);
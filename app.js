const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/get");
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use("/",routes)
app.use(cors())
app.use(express.static("Frontend"))

mongoose.connect("mongodb+srv://mainuser:test@cluster.0gtou.mongodb.net/rest?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true },() =>
{
    console.log("Connected to database.")
})

app.listen(3000);
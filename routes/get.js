const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Routes
router.get("/", async (request, response)=>
{
     try{
     const data = await Post.find()
     console.log(data)
     response.json(data)
     console.log("Get request successful.")
     }
     catch(error)
     {
          console.log(error)
          response.json(error)
     } 
    
})

module.exports= router;
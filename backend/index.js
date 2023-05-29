const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// const collection = require("./mongo")

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

app.get("/login", cors(),(req,res)=> {
  
});//"/"==login page

app.post("/", async(req,res)=>{
  const{email,password}=req.body
  //req.boy has the email and password send using submit() and is stored in {email,password}

try{
const check = await collection.findOne({email:email})
//search this particular email already exist
  if (check){
    res.json("exist")
    //if check==true, "exist" message will be shown
  }
  else{
    //if email is new and does not exist
    res.json("not exist")
  }


}
catch (e) {
    res.json("not exist")
}

})

//signup


app.post("/", async(req,res)=>{
  const{email,password}=req.body
  //req.boy has the email and password send using submit() and is stored in {email,password}

  const data = {
    email:email,
    password : password
  }
//making new object 'data' that stores email and password passed here through req.body


  try{
const check = await collection.findOne({email:email})
//search this particular email already exist
  if (check){
    res.json("exist")
    //if check==true, "exist" message will be shown
  }
  else{
    //if email is new and does not exist
    res.json("not exist")
    await collection.insertMany([data])
    //insert data to database if user is new 
  }


}
catch (e) {
    res.json("not exist")
}

})









//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL) // if this got connected print the below message
  .then(() => console.log("Connect to Database"))
  .catch((err) => console.log(err)); // if any error, will be displayed herw




//signup schema
const newSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  course:{
    type: String,
    required: true,
    // enum: ['', 'Course 2', 'Course 3'] 
  }
})


const collection = mongoose.model("collection", newSchema)
module.exports = collection




//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));  



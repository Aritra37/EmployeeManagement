import express from "express";
import bodyParser from "body-parser";
import Employees from "../models/users.js";

const app = express(); //routes

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/signin", async(req, res) => 
{
  try {
    
  const data = req.body;
  console.log(data)
  const user =  await Employees.findOne({ email: data.email })
  console.log(user)
  if(!user)
  {
    return res.status(401).json({message :"user not found"});
  }
  const pass = data.password;
  if(user.password == pass)
  {
    res.status(200).json(user);
  }else{
    res.status(401).json("Invalid credential")
  }
  } catch (error) {
      res.status(401).json("internal server error")
  }
});

export default app;

import express from "express";
import Employees from "../models/users.js";

const app = express();

app.get("/", async(req, res) => {
  await Employees.find().then((result)=>{
    if(result==null)
    res.json({status: 400});
    else
    res.status(200).json({data:result});
  })
  .catch((err)=>{
    console.log(err)
  })
});

export default app;

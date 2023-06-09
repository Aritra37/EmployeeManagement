import express from "express";
import bodyParser from "body-parser";
import Employees from "../models/users.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/",(req, res) => 
{
  const data = req.body;
  Employees.deleteOne({ email: data.email })
  .then((result)=>{
    if(result==null)
    res.json({status:400});
    else
    res.json({status:200,result:result});
  })
  .catch((err)=>{
    console.log(err)
    res.json({status:401});
  })
});


export default app;

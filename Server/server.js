import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app=express();
app.use(cors()); //Middlewares
app.use(cookieParser()); //Middlewares
app.use(express.json()); //middlewares

const connection=mysql.createConnection({
   host:"localhost",
   user:"root",
   port:3306,
   password:"",
   database:"Employee"
})

connection.connect(function(err){
    if(err)
    {
        console.log("Error in connection");
    }
    else{
        console.log("Connected");
    }
})

app.post('/login',(req,res)=>{
    const sql="SELECT * FROM users WHERE username =? AND password = ?";
    connection.query(sql,[req.body.username,req.body.password],(err,result)=>{
        if(err)
        return res.json({Error:"Error",Error:"Error running in query"});
        if(result.length>0)
        {
            return res.json({Status:"Success"})
        }
        else
        {
            return res.json({Status:"Error",Error:"Wrong username or password"})
        }
    })
})

app.listen(8000,()=>{
    console.log("Running");
})
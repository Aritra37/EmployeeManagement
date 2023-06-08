import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';


const app=express();
app.use(
  cors({
    origin: ["http://localhost:3000/"],
    methods:["POST","GET","PUT"],
    credentials:true
  })
); //Middlewares
app.use(cookieParser()); //Middlewares
app.use(express.json()); //middlewares

const connection=mysql.createConnection({
   host:"localhost",
   user:"root",
   port:3306,
   password:"",
   database:"Employee"
})

const storage=multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,file.filename+"_"+Date.now()+path.extname(file.originalname));
    }
})

const upload=multer({
    storage:storage
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
        return res.json({Error:"Error",Error:"Error in running query"});
        if(result.length>0)
        {
            const id=result[0].id;
            const token=jwt.sign({id},"jwt-secret-key",{expiresIn:'1d'});
            res.cookie('token',token);
            return res.json({Status:"Success"})
        }
        else
        {
            return res.json({Status:"Error",Error:"Wrong username or password"})
        }
    })
})

app.post('/create',(req,res)=>{
    const sql="INSERT INTO employees (`name`,`email`,`contact`,`department`,`joiningDate`,`password`) VALUES(?)";
    bcrypt.hash(req.body.password?.toString(),10,(err,hash)=>{
        if(err)
        return res.json({Error:"Error in hashing password"});
        const values=[
            req.body.name,
            req.body.email,
            req.body.contact,
            req.body.department,
            req.body.joiningdate,
            hash,
        ]
        connection.query(sql,[values],(err,result)=>{
            if(err)return res.json({Error:"Inside signup query"});
            return res.json({Status:"Success"});
        })
    })
})

app.get("/getEmployee", (req, res) => {
  const sql = "SELECT * FROM employees";
  connection.query(sql, (err, result) => {
    if (err) return res.json({ Error: "Unable to fetch data" });
    return res.json({ Status: "Success", Result: result });
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM employees WHERE id=?";
  connection.query(sql, [id], (err, result) => {
    if (err) return res.json({ Error: "Unable to delete" });
    return res.json({ Status: "Success" });
  });
});

const UserVerfication=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        res.json({Error:"Sorry you are not authenticated"});
    }
    else
    {
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err)return res.json({Error:"Wrong Token"})
            next();
        })
    }
}
app.get('/dashboard',UserVerfication,(req,res)=>{
    return res.json({Status:"Success"});
})

app.get('/logout',(req,res)=>{
    res.clearCookie('token');
    return res.json({Status:"Success"});
})
app.listen(8000,()=>{
    console.log("Running");
})
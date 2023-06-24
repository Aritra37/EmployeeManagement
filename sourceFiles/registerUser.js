import express from "express";
import bodyParser from "body-parser";
import Employees from "../models/users.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const data = req.body;
  const Employee = new Employees({
    name: data.name,
    email: data.email,
    password: data.password,
    contact: data.contact,
    joining: data.joining,
    department: data.department,
    admin: data.admin,
  });

  try {
    Employee.save();
    res.send("Employee added to database succesfully");
  } catch (err) {
    console.log(err);
  }
});

export default app;

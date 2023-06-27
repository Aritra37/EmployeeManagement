import Express from "express";
import bodyParser from "body-parser";

import Employees from "../models/users.js";

var app = Express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", async(req, res) => {
  var data = req.body;
  console.log(data);

 try {
    const result = await Employees.updateOne(
      { email: data.email },
      { password: data.password, contact: data.contact, name: data.name }
    );

    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;

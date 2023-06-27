import express from "express";
import bodyParser from "body-parser";
import Tasks from "../models/tasks.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const data = req.body;
  const task = new Tasks({
    email: data.email,
    type: data.type,
    start: data.startTime,
    description: data.description,
    duration: data.duration,
  });

  try {
    task.save();
    res.send("task saved succesfully");
  } catch (err) {
    console.log("therre was an error trying to save task ");
    console.log(err);
    res.send("Please try again");
  }
});

export default app;

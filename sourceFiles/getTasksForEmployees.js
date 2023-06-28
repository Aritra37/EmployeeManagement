import Express from "express";
import bodyParser from "body-parser";
import Tasks from "../models/tasks.js";

const app = Express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", async(req, res) => {
  const {email} = req.body;

  console.log(email);

  await Tasks.find({ email: email }).then((result)=>{
    if(result==null)
    res.json({status:400})
    else
    {
      console.log(result)
      res.status(200).json({data:result});}
  })
  .catch((err)=>{
    console.log(err);
  })

});

export default app;

import express from "express";
const app = express();
let data={};
app.get("/", (req, res) => {
  res.send("get req");
});
app.get("/home", (req, res) => {
  
  res.send("hello world");
});
app.get("/bfhl",(req,res)=>{
  data=req.body.data;
  res.send("hello world");
})
app.post("/bfhl",(req,res)=>{
  data=req.body.data;
  res.send("hello world");
})

app.listen(8080, () => {
  console.log("server is running on port 3000");
});

const express=require("express")
const app=express()


const fs=require('fs');
fs.readFile("./employees.json", 'utf-8',(err,jsonString) =>{

    console.log(jsonString)
    
app.get("/",(req,res)=>{

    res.send(jsonString)
});

app.get("/", (req,res)=>{
    const emp=jsonString.find(c=>c.id ===parseInt(req.params.id))
    if(!emp) res.status(404).send("not found");
    res.send(emp)
})




} )




app.listen(4000,()=>console.log("listening"))
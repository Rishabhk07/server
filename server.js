/**
 * Created by rishabhkhanna on 30/07/18.
 */
const app = require('express')();

app.get("/", (req,res)=>{
    res.send("<h1>hello from backend</h1>");
})

app.listen(9090, ()=>{
    console.log("server has started");
})


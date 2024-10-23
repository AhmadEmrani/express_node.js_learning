const express = require("express");
const posts = require("./post.json");
const app = express();
app.get("/", (req ,res)=>{
    res.send(req.query);
})

app.get("/posts" , (req , res)=>{
    const {title} = req.query;
    const regxpTitle = new RegExp(title ?? '' , "gi");
    const filter = posts.filter(post => post.title.match(regxpTitle));
    res.send({posts : filter});
})

app.listen(3000 , ()=>{
    console.log("server run on port 3000");
})
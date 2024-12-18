const express  = require("express");
const{
    ErrorHandler,
    NotFoundError
} = require("./util/errorHandler");
const app = express();
require("./config/mongo.config");
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.get("/", (req , res , next)=>{

})
app.use(NotFoundError);
app.use(ErrorHandler);
app.listen(3000, ()=>{
    console.log("server run");
})
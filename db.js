const mongoose =require("mongoose");
 
var mongoURL='mongodb+srv://vijay:vijay12345@cluster0.q6ykqdy.mongodb.net/mern-rooms';
mongoose.set('strictQuery', true);



mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var connection=mongoose.connection

connection.on('error',()=>{
    console.log("mongodb connection failed")
})
connection.on('connected',()=>{
    console.log("mongodb connection successfully")
})
module.exports=mongoose
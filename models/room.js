const mongoose =require("mongoose")


const roomSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    maxcount:{
        type:Number,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    rentperday:{
        type:String,
        required:true
    },
    imageurls:[],
    currentbookings:[],
    description:{
        type:String,
        required:true
    }
    

    
},{
    timestamps:true
})
console.log("success")
const roommodel=mongoose.model('rooms',roomSchema)
module.exports=roommodel
/*const{readFileSync}=require('fs')

let roomsmodel=()=>{
    let rooms =JSON.parse(readFileSync('rooms.json'));
    return rooms;
    //console.log(rooms);
}
roomsmodel();
module.exports=roomsmodel*/
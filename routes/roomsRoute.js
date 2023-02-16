const express=require("express")
const http =require("http")
const router=express.Router();
const Room=require('../models/room')


router.get("/getallrooms", async(req,res)=>{

  try {
    const rooms=await Room.find({})
   return res.json({rooms});
   
   //console.log({rooms});

  } catch (error) {
    return res.status(400).json({message:error})
    //console.log("error")
    
  }
});
router.post("/getroombyid", async(req,res)=>{
  const roomid=req.body.roomid

  try {
    const room=await Room.findOne({_id:roomid})
   return res.send(room);
   
   //console.log({rooms});

  } catch (error) {
    return res.status(400).json({message:error})
  //  console.log("error")
    
  }
});
//console.log("success")
router.post("/addroom",async(req,res)=>{
  try {
    const newroom= new Room(req.body)
    await newroom.save()
    res.send("new room is added")
  } catch (error) {
    
   console.log(error)
  }

})

module.exports=router;
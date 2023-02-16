const express =require("express")

const router= express.Router()
const booking=require('../models/booking')


router.post("/bookroom",async(req,res)=>{
    const {
        room,
        userid,
        checkin,
        checkout,
        totalamount,
        totaldays
      }=req.body
      try {
        const newbooking=new Bookingscreen({
            room:room.name,
            roomid:room._id,
            userid,
            checkin,
            checkout,
            totalamount,
            totaldays,
            trnsactionId:'12345'
        
        });
        const booking= await newbooking.save()
        res.send('room booked sucessfully')
      } catch (error) {
        console.log(error)
      }
})
module.exports = router
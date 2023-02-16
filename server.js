const express = require("express")
const http=require("http");
const app = express()
const dbConfig=require('./db')
const cors =require('cors');
var bodyParser = require('body-parser')
app.use(cors());
//app.use(express.json)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const roomsRoute=require('./routes/roomsRoute')
const userRoute=require('./routes/usersRoute')
//const bookingsRoute=require('./routes/bookingsRoute')
app.use('/api/rooms',roomsRoute)
app.use('/api/users',userRoute)
//app.use('/api/bookings',bookingsRoute)
const port = process.env.PORT || 8000;
app.listen(port, () => console.log("port running in 8000"));
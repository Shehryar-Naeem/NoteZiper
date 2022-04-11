const express = require("express");
const App = express();
const notes = require("./Data/notes")
const {notFound,errorHandler} =require("../BackEnd/MiddleWare/errorMiddleWare")
const userRouter =require("./routes/userRouter")
require("../BackEnd/Config/db")


App.use(express.json())
const port = process.env.PORT || 8000;
App.listen(port,console.log(`Successfully create on port ${port}`))

App.get("/",(req,res)=>{
    res.send("Successfully created API... giver why error")
})


App.use("/api/users",userRouter)
App.use(notFound)
App.use(errorHandler)
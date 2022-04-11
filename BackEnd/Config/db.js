const mongoose= require("mongoose")

const url= "mongodb+srv://sheri:5tkyyhrpq@cluster0.enqvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url).then((res)=>{
    console.log("successfully connected");
}).catch((error)=>{
    console.log("Not connected "+error);
})

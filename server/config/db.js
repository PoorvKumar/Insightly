const mongoose=require("mongoose");

const connectDB=async()=>
{
    try
    {
        const conn=await mongoose.connect("mongodb+srv://poorv:root@blogs.ho48rr9.mongodb.net/?retryWrites=true&w=majority");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error)
    {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports=connectDB;
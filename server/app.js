const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors({credentials: true, origin: 'https://insightly-frontend.onrender.com/'}));

const connectDB=require("./config/db");
connectDB();

app.use(express.json());

const cookieParser=require("cookie-parser");
app.use(cookieParser());

app.use("/uploads",express.static(__dirname+"/uploads"));

// mongodb+srv://poorv:root@blogs.ho48rr9.mongodb.net/?retryWrites=true&w=majority

// const User=require("./models/User");

// app.post('/register',async (req,res)=>
// {
//     const {username,password}=req.body;
//     const userDoc=await User.create({username,password});
//     res.json(userDoc);
// })

//routes
const userRoutes=require("./routes/userRoutes");
const postRoutes=require("./routes/postRoutes");

app.use(userRoutes);
app.use(postRoutes);

const PORT=process.env.PORT || 5000;

app.listen(5000,console.log(`Server listening on PORT:${PORT}`));


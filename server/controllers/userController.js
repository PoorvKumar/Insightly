const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const salt=bcrypt.genSaltSync(10);
const SECRET="secret_key";

exports.register=async (req,res)=>
{
    const {username,password}=req.body;

    const userDoc=await User.findOne({username:username});
    if(userDoc)
    {
        return res.status(400).json("User already exists");
    }

    try
    {
        let encryptPass=bcrypt.hashSync(password,salt);
        const userDoc=await User.create(
            {
                username,
                password: encryptPass
            });
        // res.json(userDoc);
        // jwt.sign({username,id:userDoc._id},SECRET,{},(err,token)=>
        // {
        //     if(err)
        //     {
        //         throw err;
        //     }
        //     res.cookie("token",token).json("ok");
        // });
        res.status(200).json(userDoc);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.login=async (req,res)=>
{
    const {username,password}=req.body;

    try
    {
        const userDoc=await User.findOne({username:username});
        if(!userDoc)
        {
            return res.status(404).json("wrong credentials");
        }

        const passOk=bcrypt.compareSync(password,userDoc.password);

        if(passOk)
        {
            //logged in
            jwt.sign({username,id:userDoc._id},SECRET,{},(err,token)=>
            {
                if(err)
                {
                    throw err;
                }
                res.cookie("token",token).json({
                    id: userDoc._id,
                    username
                });
            });
        }
        else
        {
            res.status(401).json("wrong credentials");
        }
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getProfile=(req,res)=>
{
    const { token }=req.cookies;

    if(!token)
    {
        res.json({});
        return;
    }

    jwt.verify(token,SECRET,{},(err,info)=>
    {
        if(err)
        {
            throw err;
        }
        res.json(info);
    })
}

exports.logout=(req,res)=>
{
    res.clearCookie("token").json("Logout Successful");
}
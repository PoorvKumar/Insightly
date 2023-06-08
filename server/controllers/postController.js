const Post=require("../models/Post");
const jwt=require("jsonwebtoken");
const fs=require("fs");

const SECRET="secret_key";

exports.createPost=async (req,res)=>
{
    const {originalname,path}=req.file;

    const parts=originalname.split('.');
    const ext=parts[parts.length-1];

    let pathRes=path.substring(3);
    const newPath=pathRes+'.'+ext;

    fs.renameSync(path,newPath);

    const { token }=req.cookies;

    jwt.verify(token,SECRET,{},async (err,info)=>
    {
        if(err)
        {
            throw err;
        }

        const {title, summary, content }=req.body;

        const postDoc=await Post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id
        });

        res.json(postDoc);
    });
}

exports.getPost=async (req,res)=>
{
    const posts=await Post.find()
    .populate('author', ['username'])
    .sort({createdAt: -1})
    .limit(20);

    if(!posts)
    {
        return res.json([]);
    }

    res.json(posts);

    // res.json(
    //     await Post.find()
    //       .populate('author', ['username'])
    //       .sort({createdAt: -1})
    //       .limit(20)
    //   );
}

exports.getSinglePost=async (req,res)=>
{
    const {id}=req.params;

    const postDoc=await Post.findById(id).populate("author",["username"]);
    res.json(postDoc);
}
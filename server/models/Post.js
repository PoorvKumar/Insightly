const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const PostSchema=new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
});

const Post=mongoose.model("Post",PostSchema);
module.exports=Post;
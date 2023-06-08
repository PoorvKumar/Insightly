const express=require("express");
const router=express.Router();

const postController=require("../controllers/postController");

const multer=require("multer");
const uploadMiddleware=multer({dest: '../uploads/'});

router.post('/post',uploadMiddleware.single('file'), postController.createPost);
router.get('/post',postController.getPost);
router.get('/post/:id',postController.getSinglePost);

module.exports=router;
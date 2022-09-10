import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyuser }  from "../utils/verifyToken.js";


const router =express.Router()


//we make it to show us  only the EndPoints
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("Hello you are Logged in")
// });

// router.get("/checkuser/:id",verifyuser, (req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete your account")
// });

// // Their was an error in admin panel 
// router.get("/checkadmin/:id",verifyAdmin, (req,res,next)=>{
//     res.send("Hello Admin you are logged in and you can delete all accounts")
// });

//UPDATE
router.put("/:id",verifyuser,  updateUser);
//DELETE
router.delete("/:id",verifyuser, deleteUser);
//GET
router.get("/:id",verifyAdmin, getUser);
//GET ALL
router.get("/", getUsers);



export default router
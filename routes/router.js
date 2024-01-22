const express=require("express")
const router=express.Router();
const userController=require('../controllers/User.Controller')

router.get('/',(req,res,next)=>{
    res.send("Hello from home")
})

//get all user
router.get('/getAll',userController.getAllUser)






module.exports=router
const express=require("express")
const router=express.Router();
const userController=require('../controllers/User.Controller')
router.get('/',(req,res,next)=>{
    res.send("Hello from home")
})
router.get('/getalluser',userController.getAll)






module.exports=router
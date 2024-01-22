const UserModel=require('../models/User.model')
class UserController{


    static  getAllUser(req,res){
        const  result= UserModel.getUser()

        if(result){
            res.send(result)
        }
        else{
            res.send("Sorry")
        }
    }


}
module.exports=UserController
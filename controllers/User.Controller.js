const UserModel=require('../models/User.model')
class UserController{
    static async  getAllUser(req,res){
        const  result= await UserModel.getUser()
        if(result){
            res.send(result)
        }
        else{
            res.send("Sorry")
        }
    }
}
module.exports=UserController
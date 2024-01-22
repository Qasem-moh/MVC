const UserModel=require('../models/User.model')
class UserController{


    static async getAll(req,res){
        const  result=await UserModel.getUser()
        if(result){

            console.log(result)
        }
    }


}
module.exports=UserController
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

    static async addNewUser(req, res) {
        let name = req.body.name
        let age = req.body.age
        let phone = req.body.phone
        let city = req.body.city
        let nclass = req.body.nclass
        const result = await UserModel.addNewUser(name, age, phone, city, nclass)
        if (result) {
            res.send(result)
            console.log(result)
        } else {
            res.send("Sorry")
        }
    }


}

module.exports=UserController
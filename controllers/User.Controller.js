const UserModel = require("../models/User.model");

// class controllers
class UserController {


    //controllr  to get all
    static async getAllUser(req, res) {
        const result = await UserModel.getUser();
        if (result) {
            res.send(result);
        } else {
            res.send("Sorry");
        }
    }

    static async addNewUser(req, res) {
    

        const result = await UserModel.addNewUser();

        if (result) {
            res.send(result)

            console.log(result)

        } else {

            console.log("Sorry");
        }
    }

    static async testAPi(req,res){
        const name=req.body.name
        const result= await UserModel.testAPi(name);
        result? console.log("done"):console.log("sorry");
    }
}

module.exports = UserController;

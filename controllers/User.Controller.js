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
        var name = req.body.name;
        var phone = req.body.phone;
        var age = req.body.age;
        var city = req.body.age;
        var nclass = req.body.nclass;

        const result = await UserModel.addNewUser(name, phone, age, city, nclass);

        if (result) {
            res.send(result)

            console.log(result)

        } else {

            console.log("Sorry");
        }
    }

    static async testAPi(req, res) {

        const result =  UserModel.testAPi(req.body.test);
        result ? console.log("done") : console.log("sorry");
    }
}

module.exports = UserController;

const UserModel = require("../Models/UserModels");

class UserController {


    static async createUser(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        const result = await UserModel.createUser(username, password);

        if (result) {
            console.log(result)
        } else {
            console.log('error')

        }
    }

    static async updateStudents(req, res) {
        const id = req.body.id
        const name = req.body.name;
        const phone = req.body.phone;
        const age = req.body.age;
        const city = req.body.city;
        const nclass = req.body.nclass;
        const result = await UserModel.updateStudents(id, name, phone, age, city, nclass);

        if (result) {
            res.send("update students")
            console.log(result)
        } else {
            res.send("update students error")
            console.log('error')

        }
    }

    static async getAllUsers(req, res) {
        const result = await UserModel.getAllUsers();
        if (result) {
            res.json(result)

        } else {
            console.log('error')
        }

    }


    //getAllStudents
    static async getAllStudents(req, res) {
        const result = await UserModel.getAllStudents();
        if (result) {
            res.json(result)

        } else {
            console.log('error')
        }

    }

    //createNewStudent
    static async createNewStudent(req, res) {
        const name = req.body.name;
        const phone = req.body.phone;
        const age = req.body.age;
        const city = req.body.city;
        const nclass = req.body.nclass;

        const result = await UserModel.createNewStudent(name, phone, age, city, nclass);

        if (result) {
            console.log(result)
        } else {
            console.log('error')

        }
    }

    //deleteStudents
    static async deleteStudents(req, res) {
        const id = req.body.id;
        if (id) {

            const result = await UserModel.deleteStudents(id);
            if (result){
                res.send("delete one")
                console.log(result)
            }else {
                res.send("error to delete")
                console.log('error')
            }
        }
    }
}

module.exports = UserController;
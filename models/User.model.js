const db = require('../config/db')

class UserModel {

    static async getUser() {

        return new Promise(resolve => {
            db.query("SELECT * FROM students", (error, result) => {
                if (!error)
                    return resolve(result)

            })

        })

    }

    // static async addNewUser(name, phone, age, city, nclass) {

    //     return new Promise(resolve => {

    //         db.query("INSERT INTO students (name,phone,age,city,nclass) values('Qasem','78985546584',20,'dfsfd','324342423423423')",
    //             (error, result) => {
    //                 if (!error)
    //                     resolve("Add Successfully")
    //                 else
    //                     console.log(error)
    //                 resolve(error)
    //             })

    //     })
    // }


    static async addNewUser(name, phone, age, city, nclass) {

        return new Promise(resolve => {

            db.query("INSERT INTO students (name,phone,age,city,nclass) values(?,?,?,?,?)",
                [name, phone, age, city, nclass],
                (error, result) => {
                    if (!error)
                        resolve("Add Successfully")
                    else
                        console.log(error)
                    resolve(error)
                })

        })
    }


    static async testAPi(test) {
        return new Promise(resolve => {
            console.log(test);
        })
    }

}


















module.exports = UserModel
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
}

module.exports= UserModel
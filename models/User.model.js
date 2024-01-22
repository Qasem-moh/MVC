const db = require('../config/db')

class UserModel {


    static async getUser() {


        return new Promise(resolve => {
            db.query("select * from students", [], (error, result) => {
                if (!error)
                    resolve(result)
            })
        })
    }
}

module.exports= UserModel
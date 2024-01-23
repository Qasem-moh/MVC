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

    static async addNewUser(name,phone,age,city,nclass){

        return new Promise(resolve=> {
            db.query("INSERT INTO students (uname,uphone,uage,city,nclass) values(?,?,?,?,?)",[name,phone,age,city,nclass],(error,result)=>{
                if(!error)
                    resolve("Add Successfully")
                else
                    console.log(error)
                    resolve("error.message")
            })

        })
    }
nclass
}


















module.exports= UserModel
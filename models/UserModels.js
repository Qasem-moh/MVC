const DB = require('../config/DB')

class UserModels {


    //createNewStudent
    staic

    static async createUser(username, password) {
        return new Promise(resolve => {

            DB.query('INSERT INTO user (name,password) values (?,?)', [username, password], (err, result) => {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log(result);
                }
            })
        })
    }

    static async getAllUsers() {
        return new Promise(resolve => {
            DB.query('SELECT * FROM user', (err, result) => {
                if (err) {
                    console.log(err.message);

                } else {
                    resolve(result);
                    console.log(result);
                    DB.end({})
                }
            })

        })
    }

    //get all students
    static async getAllStudents() {
        return new Promise(resolve => {
            DB.query('SELECT * FROM students', (err, result) => {
                if (err) {
                    console.log(err.message);

                } else {
                    resolve(result);
                    console.log(result);
                    DB.end({})
                }
            })

        })
    }

    static async createNewStudent(name, phone, age, city, nclass) {
        return new Promise(resolve => {
            DB.query('INSERT INTO students (name,phone,age,city,nclass) values (?,?,?,?,?)', [name, phone, age, city, nclass], (err, result) => {
                if (err) {

                    console.log(err.message);
                } else {
                    resolve(result)
                    console.log(result);
                }
            })
        })
    }
}


module.exports = UserModels
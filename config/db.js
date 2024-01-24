const mysql=require("mysql")

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"qasem"
})

connection.connect((err)=>{
    if(err) return console.log(err);
    console.log("Connected to database")
})
module.exports=connection;
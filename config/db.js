const mySql=require('mysql')

const db=mySql.createConnection({
    host:"localhost",
    user:'root',
    password:"root",
    database:"qasem"
});
// db.getConnection(()=>{
//     console.log("Connected to my sql")
// })

db.connect((err)=>{
    if(err) return console.error(err.message)
    console.log("connected to mysql database")
})



module.exports=db
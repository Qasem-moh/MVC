const mySql=require('mysql')

const db=mySql.createPool({
    host:"localhost",
    user:'root',
    password:"root",
    database:"qasem"
});
db.getConnection(()=>{
    console.log("Connected to my sql")
})

module.exports=db
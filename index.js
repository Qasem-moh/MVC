const express=require('express')
const app=express()
const port=5452
const mydb=require('./config/db')
const router=require("./routes/router")


app.use(router)


app.listen(port,()=>{
    console.log(`Server is running on port ${port} `)
})
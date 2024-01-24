const express=require("express")

const DB=require('./config/DB')
const bodyParser=require("body-parser")
const router=require('./Routes/Routes')


const app=express()
const port=5452

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)









app.listen(port,()=> console.log("Server is running"))
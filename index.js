const express=require('express')
const app=express()
const boduParser=require('body-parser')
const port=5452
const mydb=require('./config/db')
const router=require("./routes/router")


app.use(router)
app.use(boduParser.json())
app.use(boduParser.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log(`Server is running on port ${port} `)
})
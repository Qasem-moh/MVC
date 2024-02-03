const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController');
const {model} = require("../Controller/UserController");

router.post('/send',UserController.createUser)
router.post('/createNewStudent',UserController.createNewStudent)
router.get('/getAllUsers',UserController.getAllUsers)
router.get('/getAllStudents',UserController.getAllStudents)
router.post('/deleteStudents',UserController.deleteStudents)


module.exports=router
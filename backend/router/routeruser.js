const Routeruser = require('express').Router()
const controlleruser = require('../controller/usercontroller')


Routeruser.get('/getusers',controlleruser.GetAllUser)
module.exports= Routeruser
const RouterDetails = require('express').Router()
const controllerdetail = require('../controller/Detailscontroller.js')



RouterDetails.get('/One/:id',controllerdetail.Oneproductdetail)



module.exports= RouterDetails
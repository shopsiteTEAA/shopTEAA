const RouterCart = require('express').Router()
const controllercart = require('../controller/cartcontroller.js')



RouterCart.get('/getAllcarts',controllercart.getAllcarts)
RouterCart.delete('/deletecart',controllercart.deletecart)
RouterCart.post('/addtoCart',controllercart.addtoCart)


module.exports= RouterCart
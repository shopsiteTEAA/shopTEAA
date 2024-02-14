const RouterSaler = require('express').Router()
const controllersaler = require('../controller/productcontroller')

RouterSaler.put('/update/:id',controllersaler.UpdateProduct)
RouterSaler.post('/createprod',controllersaler.InsertProduct)
RouterSaler.get('/getallprod',controllersaler.GetallProduct)
RouterSaler.get('/availableprod',controllersaler.GetallProductAvailable)
RouterSaler.delete('/deleteprod/:id',controllersaler.DeleteProduct)
RouterSaler.get('/productcategory/:category',controllersaler.GetProductByCatigory)
RouterSaler.get('/promoprod',controllersaler.GetProductForPromo)

RouterSaler.get('/toprateprod',controllersaler.GetTopRatedProduct)
RouterSaler.get('/getproduct/:id',controllersaler.GetProductById)

module.exports=RouterSaler
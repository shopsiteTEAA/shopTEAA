const  express = require('express')
const cors = require ('cors')
require('dotenv').config()
const port = process.env.PORT
const Routermain = require('./router/routermain')
const Routeruser = require('./router/routeruser')
const RouterSaler = require('./router/routersaler')
const RouterPanier = require('./router/routerPanier')
const app = express()
app.use(express.json())
app.use(cors())
const cloudinary = require("./cloudinary/cloudinary")

app.use(express.static(__dirname + '../public'))
app.use('/', Routermain)
app.use('/user',Routeruser)
app.use('/saler',RouterSaler)
app.use("/panier",RouterPanier)

app.listen(port,()=>{
    console.log('the server is lessting on ',port);
})
const  express = require('express')
const cors = require ('cors')
require('dotenv').config()
const port = process.env.PORT
const Routermain = require('./router/routermain')
const Routeruser = require('./router/routeruser')
const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static(__dirname + '../public'))
app.use('/', Routermain)
app.use('/user',Routeruser)
app.listen(port,()=>{
    console.log('the server is lessting on ',port);
})
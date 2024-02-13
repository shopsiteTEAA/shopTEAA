const  express = require('express')
const cors = require ('cors')
require('dotenv').config()
const Routermain = require('./router/routermain')
const app = express()
app.use(express.json())
app.use(cors())

app.use('/', Routermain)
app.listen(dotenv.PORT,()=>{
    console.log('the server is lessting on ',dotenv.PORT);
})
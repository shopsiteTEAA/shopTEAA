const RouterAdmin = require('express').Router()
const controllerAdmin = require('../controller/adminControlleur')

RouterAdmin.get('getAllClients/',controllerAdmin.getAllClients)
RouterAdmin.delete('/deleteClientAcount/:id',controllerAdmin.deleteClientAccount)
RouterAdmin.put('/update/:id',controllerAdmin.updateClientInfo)

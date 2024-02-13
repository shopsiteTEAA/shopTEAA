const {User} = require ('../database/sequalise')

const getalluser =()=>{
    return User.findAll()
}

module.exports={
    getalluser : getalluser
}
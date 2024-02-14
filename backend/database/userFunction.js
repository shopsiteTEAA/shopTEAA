const {User} = require ('../database/sequalise')





const getalluser =()=>{
    return User.findAll()
}
const findUser = (email) => {
    return User.findOne({where:({email: email})})
}
const saveUser = (data) => {
  User.create(data)
}

module.exports={
    getalluser : getalluser,
    findUser : findUser,
    saveUser : saveUser
}
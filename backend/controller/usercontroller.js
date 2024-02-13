const user = require('../database/userFunction')

module.exports ={
    GetAllUser : async (req , res)=>{
        try{
            const result = await user.getalluser()
            res.status(200).json(result)
        }
        catch(err){
            console.log(err);
        }
    }
}
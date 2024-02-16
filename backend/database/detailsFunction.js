const {Product} = require ('../database/sequalise')


const One=(id)=>{
 return Product.findAll({where:{idproduct:id}})
}

module.exports = One
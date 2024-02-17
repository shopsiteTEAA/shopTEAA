const Product = require ('../database/sequalise.js')


const One=(id)=>{
 return Product.findAll({where:{idproduct:id}})
}

module.exports = One
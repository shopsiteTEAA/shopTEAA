const { where,Op } = require('sequelize')
const {Product} = require ('./sequalise')


// insert product 
const insertproduct =(data)=>{
    Product.create(data)
}

// update product 
const updateproduct =(datanew,id)=>{
    return Product.update(datanew,{where:{idproduct:id}})
}

// delete product 
const deleteproduct =(id)=>{
    return Product.destroy({where:{idproduct : id}})
}

// get all product 
const getallproduct =()=>{
    return Product.findAll()
}

// get specific product by id 

const getproductbyid=(id)=>{
    return Product.findAll({where:{idproduct:id}})
}


//get product available 
const getallproductavailable =()=>{
    return Product.findAll({where:{status : 'available'}})
}

// get product by category 
const getproductbycatigory =(cate)=>{
    return Product.findAll({where:{category:cate}})
}

// get product for promotion 

const getproductforpromo =()=>{
    return Product.findAll({where:{status:"promo"}})
}

// get topratedproduct > 4
const gettopratedproduct =()=>{
    return Product.findAll({where:{rate:{ [Op.gt] : 4} }})
}


module.exports={
    gettopratedproduct:gettopratedproduct,
    getproductforpromo:getproductforpromo,
    getproductbycatigory:getproductbycatigory,
    getallproductavailable:getallproductavailable,
    getallproduct:getallproduct,
    deleteproduct:deleteproduct,
    updateproduct:updateproduct,
    insertproduct:insertproduct,
    getproductbyid:getproductbyid
    

}


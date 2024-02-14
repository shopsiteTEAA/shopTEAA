const { Panier } = require("../database/sequalise.js");


  //get all product from panier
  const getallpanier =(id)=>{
  return Panier.findAll({ where: {user_iduser:id} })
   }
   
  //to delete one product from panier

   const deletefrompanier =(id,oneProduct)=>{
      return Panier.destroy({
        where: { user_iduser:id, product_idproduct: oneProduct }
      });
  }

  //add a product to the list of panier products
  const addtopanier=(carts)=>{
     return Panier.create(carts)
    }
  
module.exports ={getallpanier,deletefrompanier,addtopanier}

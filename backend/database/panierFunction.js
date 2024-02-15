const { Panier } = require("../database/sequalise.js");


  //get all product from panier
  const getallpanier =(id)=>{
  return Panier.findAll({ where: {userIduser:id} })
   }
   
  //to delete one product from panier

   const deletefrompanier =(id,oneProduct)=>{
      return Panier.destroy({
        where: { userIduser:id, productIdproduct: oneProduct }
      });
  }

  //add a product to the list of panier products
  const addtopanier=(carts)=>{
     return Panier.create(carts)
    }
  
module.exports ={getallpanier,deletefrompanier,addtopanier}

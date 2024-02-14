const { Panier } = require("../database/sequalise.js");

module.exports = {
  getAllcarts: async (req, res) => {
    try {
      const { id } = req.params;
      const carts = await Panier.findAll({ where: { id: id } });
      res.status(200).json(carts);
    } catch (err) {
      console.log(err);
    }
  },
  //
  deletecart: async (req, res) => {
    try {
      const { user, oneProduct } = req.params;
      const carts = await Panier.findOne({
        where: { user_iduser: user, product_idproduct: oneProduct }
      });
      if (carts == null) {
        return res.status(404).json("User have no product to get");
      }
      await Panier.destroy({
        where: { user_iduser: user, product_idproduct: oneProduct }
      });
      res.status(200).json("product has been deleted");
    } catch (err) {
      console.log(err);
    }
  },
  //
  addtoCart: async (req, res) => {
    try {
      const carts = req.body;
      const newCart = await Panier.create(carts);
      res.status(201).json(newCart);
    } catch (err) {
      console.log(err);
    }
  }
};

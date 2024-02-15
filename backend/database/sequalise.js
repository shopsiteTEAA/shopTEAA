const { Sequelize, DataTypes, belongsToMany } = require("sequelize");
require("dotenv").config();
const database = process.env.DATABASE;
const username = process.env.USERNAME;
const pwd = process.env.PWD;

const schema = new Sequelize("teaa", "root", "eyajouini", {
  host: "localhost",
  dialect: "mysql",
});



const user = {
  iduser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  email: DataTypes.STRING,
  role: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  adress: DataTypes.STRING,
  pwd: DataTypes.STRING,
};

const product = {
  idproduct: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: DataTypes.STRING,
  category: DataTypes.STRING,
  rate: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
  status: DataTypes.STRING,
  initalprice: DataTypes.INTEGER,
  currentprice: DataTypes.INTEGER,
  imgurlmain: DataTypes.STRING,
  colors1: DataTypes.STRING,
  colors2: DataTypes.STRING,
  colors3: DataTypes.STRING,
  colors4: DataTypes.STRING,
  img1: DataTypes.STRING,
  img2: DataTypes.STRING,
  img3: DataTypes.STRING,
  img4: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  description: DataTypes.TEXT,
};

const whichlist = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
};
const panier = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  sum : DataTypes.INTEGER
};
const review_rate = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
};



// define
const User = schema.define("user", user,{freezeTableName: true , timestamps: false});
const Product = schema.define("product", product,{freezeTableName: true ,timestamps: false});
const Panier = schema.define("panier", panier,{freezeTableName: true ,timestamps: false});
const Review_rate = schema.define("review_rate", review_rate,{freezeTableName: true , timestamps: false});
const Whichlist = schema.define("wichlist", whichlist,{freezeTableName: true ,timestamps: false});


// Define associations
User.belongsToMany(Product, { through: "panier", foreignKey: "user_iduser" });
Product.belongsToMany(User, { through: "panier",foreignKey: "product_idproduct",});

Whichlist.belongsTo(User, { foreignKey: "user_iduser" });
Whichlist.belongsTo(Product, { foreignKey: "product_idproduct" });

Review_rate.belongsTo(User, { foreignKey: "user_iduser" });
Review_rate.belongsTo(Product, { foreignKey: "product_idproduct" });


schema.sync({alter : true})

module.exports ={
  User : User,
  Product : Product,
  Whichlist :Whichlist,
  Review_rate :Review_rate,
  Panier : Panier,

}



const { Sequelize, DataTypes, belongsToMany } = require("sequelize");
require("dotenv").config();
const database = process.env.DATABASE;
const username = process.env.USERNAME;
const pwd = process.env.PWD;

<<<<<<< HEAD
const schema = new Sequelize("teaa", "root", "Hammaboy10@", {
=======
const schema = new Sequelize("teaa", "root", "choclata", {
>>>>>>> 51fc6712e600398a4b6d152f5619c473cd209866
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
  firstname: {type : DataTypes.STRING,allowNull:false},
  lastname: {type : DataTypes.STRING,allowNull:false},
  email: {type : DataTypes.STRING,allowNull:false},
  role: {type : DataTypes.STRING,allowNull:false},
  phone: DataTypes.INTEGER,
  adress: {type : DataTypes.STRING,allowNull:false},
  pwd: {type : DataTypes.STRING,allowNull:false},
};

const product = {
  idproduct: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {type : DataTypes.STRING,allowNull:false},
  category: {type : DataTypes.STRING,allowNull:false},
  rate: DataTypes.INTEGER,
  status: {type : DataTypes.STRING,allowNull:false},
  initalprice: DataTypes.INTEGER,
  currentprice: DataTypes.INTEGER,
  imgurlmain: {type : DataTypes.STRING,allowNull:false},
  colors1: {type : DataTypes.STRING,allowNull:false,defaultValue: 'white' },
  colors2: {type : DataTypes.STRING,allowNull:false,defaultValue: 'white' },
  colors3: {type : DataTypes.STRING,allowNull:false,defaultValue: 'white' },
  colors4: {type : DataTypes.STRING,allowNull:false,defaultValue: 'white' },
  img1: {type : DataTypes.STRING,allowNull:false ,defaultValue : 'img.com'},
  img2: {type : DataTypes.STRING,allowNull:false ,defaultValue : 'img.com'},
  img3: {type : DataTypes.STRING,allowNull:false ,defaultValue : 'img.com'},
  img4: {type : DataTypes.STRING,allowNull:false ,defaultValue : 'img.com'},
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


schema.sync();

module.exports ={
  User : User,
  Product : Product,
  Whichlist :Whichlist,
  Review_rate :Review_rate,
  Panier : Panier,

}



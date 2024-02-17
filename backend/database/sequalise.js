const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const database = process.env.DATABASE;
const username = process.env.USERNAME;
const pwd = process.env.PWD;

const sequelize = new Sequelize("teaa", "root", "eyajouini", {
  host: "localhost",
  dialect: "mysql",
});

const Product = sequelize.define(
  "product",
  {
    idproduct: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    rate: DataTypes.INTEGER,
    status: { type: DataTypes.STRING, allowNull: false },
    initalprice: DataTypes.INTEGER,
    currentprice: DataTypes.INTEGER,
    imgurlmain: { type: DataTypes.STRING, allowNull: false },
    quantity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    userIduser : {
      foreignKey : true,
      allowNull : false,
      type: DataTypes.INTEGER 
    }
  },
  { freezeTableName: true, timestamps: true }
);

const ImgProduct = sequelize.define(
  "imgproduct",
  {
    image1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-8044861-6430770.png',
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-8044861-6430770.png',
    },
    image3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-8044861-6430770.png',
    },
    image4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-8044861-6430770.png',
    },
    productIdproduct : {
      foreignKey : true,
      allowNull : false,
      type: DataTypes.INTEGER 
    }
  },
 
  { freezeTableName: true, timestamps: false }
);

const ColorProduct = sequelize.define(
  "colorproduct",
  {
    color: { type: DataTypes.STRING, allowNull: false },
    productIdproduct : {
      foreignKey : true,
      allowNull : false,
      type: DataTypes.INTEGER 
    }
  },
  { freezeTableName: true, timestamps: false }
);

const User = sequelize.define(
  "user",
  {
    iduser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
    phone: DataTypes.INTEGER,
    adress: { type: DataTypes.STRING, allowNull: false },
    pwd: { type: DataTypes.STRING, allowNull: false },
    
  },
  { freezeTableName: true, timestamps: false }
);

const Panier = sequelize.define(
  "panier",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    sum: DataTypes.INTEGER,
    userIduser : {
      foreignKey : true,
      allowNull : false,
      type: DataTypes.INTEGER 
    },
    productIdproduct : {
      foreignKey : true,
      allowNull : false,
      type: DataTypes.INTEGER 
    }
    
  },
  { freezeTableName: true, timestamps: false }
);

const ReviewRate = sequelize.define(
  "review_rate",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    rateofuser: { type: DataTypes.INTEGER, allowNull: false },
    userIduser : {
      foreignKey : true,
      allowNull : false,
      type: DataTypes.INTEGER 
    },
    productIdproduct : {
      foreignKey : true,
      allowNull : false,
      type: DataTypes.INTEGER 
    }
  },
  { freezeTableName: true, timestamps: false }
);

const Wishlist = sequelize.define(
  "wichlist",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userIduser : {
      foreignKey : true,
      allowNull : false,
      type: DataTypes.INTEGER 
    },
    productIdproduct : {
      foreignKey : true,
      allowNull : false,
      type: DataTypes.INTEGER 
    }
  },
  { freezeTableName: true, timestamps: false }
);

// Associations
ImgProduct.belongsTo(Product ,{ foreignKey: 'productIdproduct' , onDelete: 'CASCADE' });
Product.hasMany(ImgProduct)
ColorProduct.belongsTo(Product ,{ foreignKey: 'productIdproduct' , onDelete: 'CASCADE' });
Product.hasMany(ColorProduct)
User.belongsToMany(Product, { through: Panier });
Product.belongsToMany(User, { through: Panier });
// realtion between saler 
Product.belongsTo(User, { foreignKey: 'userIduser' , onDelete: 'CASCADE' });
User.hasMany(Product, { foreignKey: 'userIduser', onDelete: 'CASCADE' });

Wishlist.belongsTo(User , { foreignKey: 'userIduser' , onDelete: 'CASCADE' } );
Wishlist.belongsTo(Product , { foreignKey: 'productIdproduct' , onDelete: 'CASCADE' });

ReviewRate.belongsTo(User,{ foreignKey: 'userIduser', onDelete: 'CASCADE' });
ReviewRate.belongsTo(Product,{ foreignKey: 'productIdproduct' , onDelete: 'CASCADE' });


sequelize.sync({alter:true});

module.exports = {
  Product :Product,
  Wishlist :Wishlist,
  Reviewrate :ReviewRate,
  Panier :Panier,
  ImgProduct :ImgProduct,
  ColorProduct :ColorProduct,
  User :User
}



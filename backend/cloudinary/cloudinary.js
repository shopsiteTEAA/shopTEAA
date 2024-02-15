require("dotenv").config()
const cloudinary = require("cloudinary").v2;




import {v2 as cloudinary} from 'cloudinary';
          
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_APIKEY, 
  api_secret: process.env.CLOUDINARY_APISECRET
});

module.exports = cloudinary;
const user = require("../database/userFunction");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userFunction = require("../database/userFunction");
const secretKey = process.env.JWT_SECRET;

module.exports = {
  GetAllUser: async (req, res) => {
    try {
      const result = await user.getalluser();
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err); 
    }
  },

  addAccount: async (req, res) => {
    const { firstname, lastname, role, phone, adress, email, pwd } = req.body;
    const hashed = await bcrypt.hash(pwd, 10); 

    try {
      const values = {
        firstname,
        lastname,
        email,
        role,
        phone,
        adress,
        pwd : hashed,
      };

      const results = await userFunction.findUser(email, firstname);
      console.log(results)
      if (results !== null) { 
        res.status(409).send("User with the same email or name already exists");
      } else {
        await userFunction.saveUser(values);
        res.status(200).send("created");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

login : async (req, res) => {
    const email = req.body.email;
    const password = req.body.pwd;
    
        try {
            const validation =await userFunction.findUser(email)
        if (validation !== null) {
            const hashedPwd = validation.pwd;
            const isMatch =await bcrypt.compare(password, hashedPwd);
            if (isMatch) {
              const token = jwt.sign(
                { email: validation.email, id: validation.id, firstname: validation.firstname },
                secretKey
              );

              res.status(200).send({
                token
              });
            } else {
              console.log("Incorrect email or password");
              res.status(401).send({ error: "Incorrect email or password" });
            }
          }else{
            res.status(404).send("user not found")
          }
        
        
      }catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal server error" });
      }
      
  },

};

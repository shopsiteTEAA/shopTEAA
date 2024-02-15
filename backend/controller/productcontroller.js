const prod = require('../database/sallerFunction')

module.exports={
    InsertProduct : async(req,res)=>{
        const obj ={
            name: req.body.name,
            category: req.body.category,
            rate: req.body.rate,
            status: req.body.status,
            initalprice: req.body.initalprice,
            currentprice: req.body.currentprice,
            imgurlmain: req.body.imgurlmain,
            colors1: req.body.color1,
            colors2: req.body.color2,
            colors3: req.body.color3,
            colors4: req.body.color4,
            img1: req.body.img1,
            img2: req.body.img2,
            img3: req.body.img3,
            img4: req.body.img4,
            quantity: req.body.quantity,
            description: req.body.description,
        }
        try{
            const results = prod.insertproduct(obj)
            res.status(200).send('inserted')
        }
        catch(err){
            console.log('err in inserting prod',err);
        }
    },
    UpdateProduct : async (req,res)=>{
        const id = req.params.id
        const obj ={
            name: req.body.name,
            category: req.body.category,
            rate: req.body.rate,
            status: req.body.status,
            initalprice: req.body.initalprice,
            currentprice: req.body.currentprice,
            imgurlmain: req.body.imgurlmain,
            colors1: req.body.color,
            colors2: req.body.color,
            colors3: req.body.color,
            colors4: req.body.color,
            img1: req.body.img,
            img2: req.body.img,
            img3: req.body.img,
            img4: req.body.img,
            quantity: req.body.quantity,
            description: req.body.description,
        }
        try{
              const results = prod.updateproduct(obj,id)
              res.status(201).json(results)

        }
        catch(err){
            console.log('err in updating product ',err);
        }
    },
    DeleteProduct : async (req,res)=>{
        const id = req.params.id
        try{
            const results = prod.deleteproduct(id)
            res.status(203).send('deleted !')
        }
        catch(err){
            console.log('err in delete product',err);
        }
    },
    GetallProduct : async (req,res)=>{
        try{
            const results = await prod.getallproduct()
            res.status(200).send(results)
        }
        catch(err){
            console.log('err in getting all product ',err);
        }
    },
    GetallProductAvailable : async (req,res)=>{
        try{
            const results = await prod.getallproductavailable()
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting all product ',err);
        }
    },
    GetProductByCatigory : async (req,res)=>{
        const cate = req.params.category
        try{
            const results = await prod.getproductbycatigory(cate)
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting product categ',err);
        }
    },
    GetProductForPromo : async (req,res)=>{
        try{
            const results = await prod.getproductforpromo()
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting promoted data ',err);
        }
    },
    GetTopRatedProduct : async (req,res)=>{
        try{
            const results = await prod.gettopratedproduct()
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting promo product',err);
        }
    } ,
    GetProductById : async (req,res)=>{
        const id = req.params.id
        try{
            const results = await prod.getproductbyid(id)
            res.status(200).json(results)
        }
        catch(err){
            console.log('err in getting product',err);
        }
    }
} 
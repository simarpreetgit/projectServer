const router = require("express").Router();
const mongoose = require('mongoose');
const { response } = require("../app");
const Product = require('../models/Product.model');


router.post('/products',(req,res)=>{

const {name,image,description,price,amount,products}=req.body
Product.create({name,image,description,price,amount,products})
.then((response)=>res.json(response))
.catch((err)=>res.json(err))

});

router.get('/products',(req,res)=>{
    Product.find()
    .then(products =>res.json(products))
    .catch(err=> res.json(err));
});

router.get('/products/:productID',(req,res)=>{
const {productID} = req.params

if(!mongoose.Types.ObjectId.isValid(productID))
{
    res.status(400).json({message:'Specified id is not valid'})
    return;
}

Product.findById(productID)
.then(product=>res.json(product))
.catch(err=> console.log(err))

})



module.exports = router;
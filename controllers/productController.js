const Product = require('../models/productmodels')

const getProducts = async(req,res)=>{
    try{
        const product = await Product.find({})
        res.status(200).json(product)
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}

const getProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    }
    catch(err){
        res.status(404).json({message:err.messgae})
    }
}

const createProduct = async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(err){
        console.log(err.message)
        res.status(400).json({message:err.message})
    }
}

const updateProduct = async(req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404).json({message:'Product not Found'})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params 
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({messageL:'Product Not Found'})
        }
        res.status(200).json(product)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,deleteProduct
}
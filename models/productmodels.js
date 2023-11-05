const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:String,
    brand:String,
    rating:Number,
    price:Number
},{
    timestamps:true
})

const Product = mongoose.model('Products',productSchema);

module.exports = Product;
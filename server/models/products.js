const mongoose=require('mongoose');
ProductSchema=new mongoose.Schema({})
const productsModel=mongoose.model('products',ProductSchema,'products');
ProductSchema.index({ Bb_Category: 'text', Product_Title: 'text',
Brand:'text'});
module.exports=productsModel;
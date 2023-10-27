const mongoose=require('mongoose');
kartSchema=new mongoose.Schema({
    user_id:String,
    quantity:{
        type:Number,
        default:1,
    },
    Uniq_Id: String,
    Bb_Category: String,
    Product_Title: String,
    Brand: String,
    Quantity_Or_Pack_Size: String,
    Mrp: Number,
    Price: Number,
    Site_Name: String,
    Offers: String,
    Stock_Availability: Boolean,
    Image_Url: [String], // An array of image URLs
    Url: String,
  });
const kartModel=mongoose.model('kart',kartSchema);
module.exports=kartModel;
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },password:{
        type:String,
        required:true,
    },orders:{
        items: [
          {
            _id: String, // Use a custom ID, as mentioned before
            Uniq_Id: String,
            Crawl_Timestamp: String,
            Bb_Category: String,
            Product_Title: String,
            Brand: String,
            Quantity_Or_Pack_Size: String,
            Mrp: Number,
            Price: Number,
            Site_Name: String,
            Offers: String,
            Stock_Availability: Boolean,
            Image_Url: mongoose.Schema.Types.Mixed ,
            Url: String,
            quantity: Number,
            user_id: String,
        },
      ],
      addressId: {
        type: mongoose.Schema.ObjectId,
      },
      totalAmount: {
        type: Number,
      },
      paymentMode: {
        type: String,
      },
      transactionId: String,
      paymentStatus:String,
      orderDate: Date,
    }});
const user=mongoose.model('user',userSchema);
module.exports=user;
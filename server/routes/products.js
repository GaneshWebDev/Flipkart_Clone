const express=require('express');
const router=express.Router();
const productsModel=require('../models/products');
const kartModel=require('../models/kart');
router.get('/products', (req, res) => {
  productsModel.aggregate([
    { $sample: { size: 30 } } // Fetch a random sample of 30 documents i
  ])
  .exec()
  .then(data => {
    res.send({ data });
  })
  .catch(err => {
    console.error('Error fetching data:', err);
  });
});
router.post('/kartProduct',async(req,res)=>{
  try {
      const {product,id}=req.body;
      const product_id=product.Uniq_Id;
      const productDB=await kartModel.find({user_id:id,Uniq_Id:product_id});
      if(productDB.length==0){
        const kartProduct=new kartModel({
          user_id:id,
          Uniq_Id: product.Uniq_Id,
          Bb_Category: product.Bb_Category,
          Product_Title: product.Product_Title,
          Brand: product.Brand,
          Quantity_Or_Pack_Size: product.Quantity_Or_Pack_Size,
          Mrp: product.Mrp,
          Price: product.Price,
          Site_Name: product.Site_Name,
          Offers: product.Offers,
          Stock_Availability:product.Stock_Availability,
          Image_Url: product.Image_Url,
          Url: product.Url,
        });
          const save=await kartProduct.save();
          if(save){
            res.status(200).send('data stored');
          }else{
              res.send('sorry')
          }
      }
        kartModel.findOneAndUpdate(
          { Uniq_Id:product_id,user_id:id}, // Find the document with the specific product _id
          { $inc: { 'quantity': 1 } }, // Increment the quantity field by 1
          { new: true } // To return the updated document
        )
          .then(updatedDocument => {
            if (!updatedDocument) {
              // Handle the case where the document is not found
              console.log('Product not found');
            } else {
              // The updated document is available in the `updatedDocument` variable
              console.log('Updated Document:');
              res.status(200).send('data updated');
            }
          })
          .catch(error => {
            // Handle errors here
            console.error('Error updating document:', error);
          });
      } catch (error) {
        console.log(error)
      }
    });
app.get('/products/search', async (req, res) => {
  const searchString = req.query.product;

  try {
    // Use a case-insensitive regular expression to find products that match the search string
    const regex = new RegExp(searchString, 'i');

    const matchingProducts = await Product.find({
      $or: [
        { Product_Title: { $regex: regex } },
        { Brand: { $regex: regex } },
        // Add more fields as needed
      ],
    });

    res.json({ data: matchingProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while searching for products.' });
  }
});

router.post('/kartProduct/remove',async(req,res)=>{
      const {product,id}=req.body;
      const product_id=product.Uniq_Id;
            kartModel.findOneAndUpdate(
              { Uniq_Id:product_id,user_id:id}, // Find the document with the specific product _id
              { $inc: { 'quantity': -1 } }, // Increment the quantity field by 1
              { new: true } // To return the updated document
            )
              .then(updatedDocument => {
                if (!updatedDocument) {
                  // Handle the case where the document is not found
                  console.log('Product not found');
                } else {
                  // The updated document is available in the `updatedDocument` variable
                  console.log('Updated Document:');
                  res.status(200).send('data updated');
                }
              })
              .catch(error => {
                // Handle errors here
                console.error('Error updating document:', error);
              });
 });
router.get('/kartProducts/:id',async (req,res)=>{
      const userId = req.params.id;
      const products=await kartModel.find({ user_id:userId });
      try {
        if(!products){
            res.send([]);
        }
        res.send({products});
      } catch (error) {
         res.send({err});
      }
    });
router.get('/kartProduct/:id',async (req,res)=>{
      const Id = req.params.id;
      const products=await kartModel.find({ Uniq_Id:Id });
      try {
        if(!products){
            res.send([]);
        }
        res.json(products);
      } catch (error) {
         res.send({err});
      }
    });
router.delete('/remove/:id', (req, res) => {
      const productId = req.params.id;
      kartModel.findByIdAndRemove(productId)
        .then((deletedProduct) => {
          if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
          }
          res.status(200).json({ message: 'Product deleted', product: deletedProduct });
        })
        .catch((error) => {
          console.error('Error deleting product:', error);
          res.status(500).json({ error: 'An error occurred while deleting the product' });
        });
    });
module.exports=router

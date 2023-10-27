const express=require('express');
const userModel=require('../models/user');
const bcrypt=require('bcrypt');
const salt=10;
const router=express.Router();
router.post('/userSignUp',async(req,res)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({email})
    if(user){
        return res.send('user already exist')
    }
    bcrypt.hash(password,salt,async function(err,hash){
        if(err){
          throw err;
        }
        const user=new userModel({
          email:req.body.email,
          password:hash
        });
        try {
          await user.save();
          res.status(200).send('data stored');
        } catch (error) {
          console.log(error)
        }
      })

    
});

router.post('/userSignIn', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find the user by email in the database
    const user = await userModel.findOne({ email });

    if (!user) {
      // User not found
      return res.status(401).send('Incorrect username or password');
    }

    // Compare the entered password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Passwords match; allow the user to log in
      let data={
         id:user._id,
         email:user.email,
         orders:user.orders
      }
      res.send({data,message:'hii'});
    } else{
      // Passwords do not match
      res.status(401).send('Incorrect username or password');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});
router.post('/Buy/product',async(req,res)=>{
    const {product}=req.body;
    try {
      // Find the user by their ID
      const user = await userModel.findById({_id:product.user_id});
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Add the product to the "items" array inside the "orders" field
      user.orders.items.push(product);
  
      // Save the updated user document
      await user.save();
  
      res.status(200).send({ user });
    } catch (error) {
      console.error('Error adding product to order:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;

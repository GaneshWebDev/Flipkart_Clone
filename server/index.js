const express=require('express');
const connectDB=require('./db');
const products=require('./routes/products');
const userSignUp=require('./routes/userRoute');
const cors=require('cors');
const app=express();
/*app.use(cors({
  origin: 'https://flikart-clone-frontend.onrender.com', // Include cookies in the requests if applicable
}));*/
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin of the request is included in the allowedOrigins array
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);
app.use(express.json());
app.use(userSignUp);
app.use(products);
connectDB();
app.listen(5000,()=>{
    console.log('server listening to port number 5000')
})

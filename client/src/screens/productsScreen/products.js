import './products.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Products({productsValue,fun}){
    const [loading, setLoading] = useState(true);
    const [product,setProduct]=useState([]);
    const [selectProduct,setSelectProduct]=useState(false);
    console.log(product,selectProduct);
    useEffect(()=>{
        axios.get('/products').then(res=>{
            const arr=res.data.data;
            fun([...arr]);
            setLoading(false);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    const addToKart=(product)=>{
      const savedItem=JSON.parse(localStorage.getItem('persist:root'));
      const id = savedItem.id;
      axios.post('/kartProduct',{product,id}).then(res=>{
        console.log(res);

      }).catch(err=>{
        console.log(err);
      })
    }
    return(
        <div className="products">
            <div className="header">
                <span>Electronics <i class="fa-solid fa-caret-down"></i></span>
                <span>TVs & Appliances <i class="fa-solid fa-caret-down"></i></span>
                <span>Men <i class="fa-solid fa-caret-down"></i></span>
                <span>Women <i class="fa-solid fa-caret-down"></i></span>
                <span>Baby & kids <i class="fa-solid fa-caret-down"></i></span>
                <span>Home & Furniture <i class="fa-solid fa-caret-down"></i></span>
                <span>Sports,Books & More <i class="fa-solid fa-caret-down"></i></span>
            </div>
         <div className='productsView'>
            {productsValue.map(pro=>{
                        <h1>{pro._id}</h1>
            })}
            {loading?<h1>Loading...</h1>:(productsValue.map(product=>{
                 const imgs=product.Image_Url.split('|');
                 return <div className="product-container" key={product._id}>
                 <div className="product-image">
                    <img src={imgs[0]} alt={product.Product_Title}/>
                 </div>
                 <div className="product-details">
                   <h1>{product.Product_Title}</h1>
                   <p>
                     <strong>Brand:</strong> {product.Brand}
                   </p>
                   <p>
                     <strong>Retail Price:</strong> ₹{product.Mrp}
                   </p>
                   <p>
                     <strong>Discounted Price:</strong> ₹{product.Price}
                   </p>
                   <div className='btn'>
                      <button id='kart' onClick={()=>addToKart(product)}>Add to Kart</button>
                      <Link to={`/product/${product.Uniq_Id}/${'products'}`}><button id='buy'>Buy Now</button></Link>
                   </div>
                 </div>
                 
               </div>
            }))}
            </div>
        </div>
    )
}
export default Products;
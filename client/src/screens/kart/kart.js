import './kart.css';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Kart(){
    const [productsValue,setProductsValue]=useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const savedItem=JSON.parse(localStorage.getItem('persist:root'));
        const id = savedItem.id;
        axios.get(`/kartProducts/${id}`).then(res=>{
            const arr=res.data.products;
            setProductsValue([...arr]);
            console.log(productsValue,'pro');
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
          window.location.reload(false);
  
        }).catch(err=>{
          console.log(err);
        })
      }
      const removefromKart=(product)=>{
        const savedItem=JSON.parse(localStorage.getItem('persist:root'));
        const id = savedItem.id;
        axios.post('/kartProduct/remove',{product,id}).then(res=>{
          console.log(res);
          window.location.reload(false);
  
        }).catch(err=>{
          console.log(err);
        })
      }
    const removeProduct=(id)=>{
        console.log(id)
        axios.delete(`/remove/${id}`).then(res=>{
            console.log(res);
            window.location.reload(false);
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="kart">
            <h1>Kart Products</h1>
            <div className='productsView'>
            {productsValue.map(pro=>{
                        <h1>{pro._id}</h1>
            })}
            {loading?<h1>Loading...</h1>:(productsValue.map(product=>{
                 const imgs=product.Image_Url[0].split('|');
                 return <div className="product-container">
                 <div className="product-image">
                    <img src={imgs[0]} alt={product.Product_Title}/>
                </div>
                  <p className='quantity'><button disabled={product.quantity===1} onClick={()=>removefromKart(product)}>-</button><span className='quantityNum'>{product.quantity-1}</span><button  onClick={()=>addToKart(product)}>+</button></p>
                 <div className="product-details">
                   <h1>{product.Product_Title}</h1>
                   <p>
                     <strong>Brand:</strong> {product.Brand}
                   </p>
                   <p>
                     <strong>Retail Price:</strong> ₹{product.Mrp*product.quantity-product.Mrp}
                   </p>
                   <p>
                     <strong>Discounted Price:</strong> ₹{product.Price*product.quantity-product.Price}
                   </p>
                   <div className='btn'>
                      <button id='remove' onClick={()=>removeProduct(product._id)}>Remove from Kart</button>
                      <Link to={`/product/${product.Uniq_Id}/${'kart'}`}><button id='buy'>Buy Now</button></Link>
                   </div>
                 </div>
                 
               </div>
            }))}
            </div>
        </div>
    )
}
export default Kart
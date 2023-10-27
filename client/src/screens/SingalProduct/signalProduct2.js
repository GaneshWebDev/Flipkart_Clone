import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios'
import { userOrders } from '../../feathers/userSlice';
import './singalProduct.css';
function SignalProduct({productsValue}){
    const [item,setItem]=useState({});
    const [images,setImages]=useState([]);
    const [count, setCount] = useState(1);
    const dispatch=useDispatch();
    const increment = () => {
        setCount(count + 1);
      };
    const decrement = () => {
        if (count > 1
            ) {
          setCount(count - 1);
        }
    }
    const { id,from } = useParams();
    console.log({id,from})
    if(productsValue.length==0){
        window.location.href='/';
    }
    const storedData = localStorage.getItem('persist:root');
    const parsedData = JSON.parse(storedData);
    let userId=parsedData.id
    userId=userId.replace(/^"(.*)"$/, '$1');

    console.log(userId)
    useEffect(() => {
        if (from === 'products') {
            console.log('from product');
          const itemNeed = productsValue.find((product) => product.Uniq_Id === id);
          setItem(itemNeed);
          if (itemNeed.Image_Url) {
            const imagesUrls = itemNeed.Image_Url.split('|');
            setImages(imagesUrls);
          }
          console.log({item,images});
        }else if(from === 'kart'){
            axios.get(`/kartProduct/${id}`).then(res=>{
                setItem(res.data[0]);
                const imageString=res.data[0].Image_Url
                console.log({imageString})
                if (res.data[0].Image_Url) {
                    const imagesUrls = imageString[0].split('|');
                    console.log(imagesUrls);
                    setImages(imagesUrls);
                  }
                  console.log(images);
            }).catch(err=>{
                console.log(err);
            })
          }
      }, [id, from]);
      const BuyProduct=()=>{
        const product={
            ...item,
            quantity:count,
            Mrp:item.Mrp*count,
            Price:item.Price*count,
            user_id:userId,
        }
        console.log(product);
         axios.post('/Buy/product',{product}).then(res=>{
            const orders={
                orders:res.data.user.orders.items
            }
            dispatch(userOrders(orders));
            alert('Order Placed');
         }).catch(err=>{
            console.log(err);
         })
    }
    return(
        <div className="product">
        {item&&<div className="product-container1" key={item._id}>
             <div className="product-image1">
                  <img src={images[0]} />
              </div>
              <div className="product-details">
                <h1>{item.Product_Title}</h1>
                <p>
                  <strong>Brand:</strong> {item.Brand}
                </p>
                <p>
                  <strong>Retail Price:</strong> ₹{item.Mrp*count}
                </p>
                <p>
                  <strong>Discounted Price:</strong> ₹{item.Price*count}
                </p>
                <div className='btnBuy'>
                   <p className='quantity'>Quantity<button onClick={decrement}>-</button><span className='quantityNum'>{count}</span><button  onClick={increment}>+</button></p>
                   <button id='buy' onClick={()=>BuyProduct()}>Buy Now</button>
                </div>
                
              </div>
              
            </div>}
     </div>
    )
}
export default SignalProduct;
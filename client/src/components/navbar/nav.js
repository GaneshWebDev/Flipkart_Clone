import './nav.css';
import { useState } from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import ProCom from '../profileComponent/proCom';
import axios from 'axios';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
function Nav({loginFun,fun}){
  const [open,setOpen]=useState(false);
  const [profile,setProfile]=useState(false);
  const [search,setSearch]=useState('');
  const user=useSelector(state=>state.log1.user);
  const handleSearch=()=>{
     axios.get(`/product?product=${search}`).then(res=>{
      console.log(res.data);
      const arr=res.data;
      fun([...arr]);
     }).catch(err=>{
      console.log(err);
     })
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
    return(
        <>
          <div className='navbar'>
            <div className='disDiv'>
              <div className='logo_div'>
                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' className='logo'/>
                <p><span id='logo_text_1'>Explore</span>&nbsp;<span  id='logo_text_2'> Plus</span><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png'/></p>
              </div>
              <div className='search_elements'>
                <input type='text' placeholder='   Serach for products, brands and more' className='searchBox' onChange={(e)=>setSearch(e.target.value)} onKeyDown={(e)=>handleKeyPress(e)}/>
                <i class="fa-solid fa-magnifying-glass searchIcon" onClick={()=>handleSearch()}></i>
              </div>
              <div className='other_elements'>
                  <div className='account_div div'>
                    {!user?<button className='login_btn' onClick={()=>loginFun(true)}>Login</button>:<Tippy content={<ProCom/>} placement='bottom' interactive={true} arrow={true} theme='light' offset={[5,18]}><span to='/profile' className='account'>My Account</span></Tippy>}
                  </div>
                  <div className='div'>
                    <button className='btn'>Become a Seller</button>
                  </div>
                  <div className='div'>
                    <button className='btn'>More</button>
                  </div>
                  <div className=' div'>
                      <div className='cart'>
                        <Link to={'/kart'}>
                        <i class="fa-solid fa-cart-shopping"></i>
                        </Link>
                        <button className='btn'>Cart</button>
                      
                      </div>
                  </div>
                </div>
            </div>
          
          </div>
          
        </>
    )
}
export default Nav;
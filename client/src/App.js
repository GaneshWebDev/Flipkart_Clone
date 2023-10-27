import './App.css'
import Nav from './components/navbar/nav';
import Home from './screens/homeScreen/home';
import Products from './screens/productsScreen/products';
import {  Routes, Route} from 'react-router-dom';
import Profile from './screens/profile/profile';
import SingalProduct from './screens/SingalProduct/signalProduct2';
import {useSelector} from 'react-redux';
import { useState } from 'react';
import Kart from './screens/kart/kart';
function App(){
  const user=useSelector(state=>state.log1.user);
  const [selectedProduct,setSelectedProduct]=useState([]);
  const [login,setLogin]=useState(false);
  console.log(login);
  const [productsValue, setProductsValue] = useState([]);
  console.log(productsValue);
  return (
    <div className='app'>
          <Nav loginFun={setLogin} fun={setProductsValue}/>
        <Routes>
            <Route path='/' element={user?<Products productsValue={productsValue} fun={setProductsValue} funSelected={setSelectedProduct}/>:<Home login={login} loginFun={setLogin}/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/kart' element={<Kart/>}/>
            <Route path='/product/:id/:from' element={<SingalProduct productsValue={productsValue}/>}/>
        </Routes>
    </div>
  )
}

export default App

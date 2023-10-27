import './login.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { userLogin } from '../../feathers/userSlice';
import axios from 'axios';
function LoginNew(fun){
    const dispatch=useDispatch();
    const {register,handleSubmit,getValues,reset,formState:{errors}}=useForm();
    const [registerDiv,setRegister]=useState(false); 
    const clickHandler=()=>{
        if(registerDiv){
            setRegister(false);
        }
    }
    const submitHandler=(data)=>{
        if(registerDiv){
           axios.post('/userSignUp',data).then(res=>{
             console.log(res);
             reset();
           }).catch(err=>{
            console.log(err);
           });
          
        }else{
            axios.post('https://newbackend-flipkart.onrender.com/userSignIn',data).then(res=>{
             console.log(res.data.data);
             dispatch(userLogin(res.data.data));
           }).catch(err=>{
            console.log(err);
           })
           
        };
       
    }
    return(
        <div className="login">
            <div className="div1">
                <div className='title'>
                <h1>Login</h1>
                <span>Ge access to your</span>
                <span>Orders, Wishlist and</span>
                <span>Recommendations</span>
                </div>
                <div>
                   <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"/>
                </div>
            </div>
            <div className="div2">
                <i class="fa-solid fa-xmark" onClick={()=>fun.loginFun(false)}></i>
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <div className='inputDiv'><input type="email" {...register('email',{required:true})} placeholder='Enter Email' required/></div>
                            {errors?.name&&<p>Email required</p>}
                            <div className='inputDiv'><input type="password" {...register('password',{minLength:{value:8,message:"Password must have at least 8 characters"}})} placeholder='Enter Password' required/>{!registerDiv&&<p>Forgot?</p>}</div>
                            {errors?.password&&<p>{errors.password.message}</p>}
                            {registerDiv&&<div className='inputDiv bottomInput'><input type='password' placeholder="Confirm Password" {...register('confirmPassword',{validate:value=>{
                            const password=getValues("password");
                            return value===password || "password didn't match"
                        }})}/></div>}
                        {errors?.confirmPassword&&<p>{errors.confirmPassword.message}</p>}
                            {!registerDiv&&<p className='terms'>By continuing, you agree to Flipkart's <span>Terms of Use</span> and <span>Privacy Policy</span></p>}
                            <button id="login" type='submit'>{registerDiv?'Register':'Login'}</button>
                        </form>
                        {!registerDiv&&<span>OR</span>}
                        <button id='reset' onClick={()=>clickHandler()}>{!registerDiv?'Request OTP':'Existing User? Log in'}</button>
                        {!registerDiv&&<p className='register'>New to Flipkart? <span onClick={()=>setRegister(true)}>Create an account</span></p>}
                     </div>
               
            
            </div>
    )
}
export default LoginNew;

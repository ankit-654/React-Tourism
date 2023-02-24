import React, { useEffect, useRef } from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Login.css'
import { Axios } from 'axios'
import loginimg from '../images/login.avif'
import { useNavigate } from 'react-router-dom';
function Login() {
    const txtpassword=useRef();
    const txtusername=useRef();
    const navigate=useNavigate();
const Submit=() => {
    var username=txtusername.current.value;
    var password=txtpassword.current.value;
    if(username=="ankit" && password=="ankit"){
       navigate("/tourism")
    }
}


  return (
    <>
    {/* <Navbar/> */}
   <div className='login-box'>
   <div className='parent'>
    <img className='image' src='/assets/login.png'/>
   </div>
   <div className='inputbox m-4 shadow text-center'>
   <div className='submain text-center'>
        <h1>Login Page</h1><hr/>
        <input type="text" ref={txtusername} placeholder='Username' className='form-control'/>  <br/>
        <input type="password" ref={txtpassword} placeholder='Password'  className='form-control'/><br/>
        <button className='btn btn-primary' onClick={()=> Submit()}>Login</button>&nbsp;
        <button className='btn btn-success'>Sign up</button>
        </div>
   </div>
   </div>
    </>
  )
}

export default Login
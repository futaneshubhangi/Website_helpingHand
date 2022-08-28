
import React from 'react';
import './Login.css';

  const Login = () =>{
  return(
    <>

    <form action=''>
        <div>
            <label htmlFor='username'>Enter your Username</label>
            <input type="text" name="username" id="username" placeholder='UserName' autoComplete='off' value=""/>
        </div>
        <div>
        <label htmlFor='username'>Enter your Password</label>
        <input type="number" name="" id="username" placeholder='PassWord' autoComplete='off' value=""/>
        <button type='submit'>Login</button>

        </div>
    </form>
    </>
    

  )
  }
export default Login;
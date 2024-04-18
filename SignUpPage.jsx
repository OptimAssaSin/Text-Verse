import React, { useState } from 'react'
import './LoginSignUp.css'

import user_icon from './images/person.jpg'
import email_icon from './images/email.jpg'
import password_icon from './images/password.jpg'


const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up")

  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img className='userimg' src={user_icon} alt="" />
                <input className='userimp' type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img className='emailimg' src={email_icon} alt="" />
                <input className='emailimp' type="email" placeholder='Email ID' />
            </div>
            <div className="input">
                <img className='passwordimg' src={password_icon} alt="" />
                <input className='passwordimp' type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup
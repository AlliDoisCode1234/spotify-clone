import React from 'react'
import { loginUrl } from '../spotify'
import "./Login.css"

const Login = () => {
    return (
        <div className="login">
           <h3>Login</h3> 
           <img 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt=""    
            />
           
            <a className="login__button" href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login

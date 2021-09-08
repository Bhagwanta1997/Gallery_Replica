import React, { useState } from "react";
import Logo from '../../Assets/profile.png';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
// import Dashboard from "../Dashboard/Dashboard";
import { useSelector,useDispatch } from "react-redux";
import { onLoginSuccess, onLogoutSuccess } from "./LoginSlice";
import './Login.css'

const Login = () => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
    console.log(isAuthenticated);
    const dispatch = useDispatch();
    const handleClick = (e)=> {
        e.preventDefault();
        if(username === null || username === ""){
            alert("Please provide username");
        }
        else if(password === "" || password === null){
            alert("Please provide password");
        }
        else{
            alert("Hello"+isAuthenticated);
            dispatch(onLoginSuccess());
            alert("Hello 1 "+isAuthenticated);
            
        }
        
    }
        return(
                <div className="container">
                    <div className="loginform">
                        <div className="profile">
                        <img src={Logo} alt="Profile" className="profileimg"/>
                        <p className="header">Login{isAuthenticated}</p>
                        </div>
                            <form  autoComplete="off" className="form">
                            <input type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                            <input type="password" placeholder="Password" value={password} onChange= {(e)=>{setPassword(e.target.value)}}/>
                            <p><Link to="/dashboard">Forgot Password ?</Link></p>
                            <div className="loginbtn">
                            <button className="loginbtn" onClick={handleClick}>Login</button>
                            <button className="loginbtn" style={{marginLeft:'40px'}} onClick={()=>dispatch(onLogoutSuccess())}>Register</button>
                            </div>
                            </form>
                    </div>
                </div>  
        )
        
}

export default Login;
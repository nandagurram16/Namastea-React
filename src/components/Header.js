import { useState } from "react";
import { CDN_LINK } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnName,setbtnName] = useState('Login')
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={CDN_LINK}
          alt="App Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/contact'>Contact us</Link></li>
          <li>Cart</li>
         <button className="login" 
          onClick= {() => {
          btnName === 'Login' 
          ? setbtnName("Logout")
          : setbtnName('Login') }}>
          {btnName}
         </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
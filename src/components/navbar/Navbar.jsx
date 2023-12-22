
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import { useState } from 'react';
import './navbar.scss';
 import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled,setIsscrolled]=useState(false);
  window.onscroll=()=>{
    setIsscrolled(window.pageYOffset === 0 ? false:true);
    return ()=>(window.onscroll=null);
  }
  return (
    <div className={isScrolled ? "navbar scrolled" :"navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
         
          <Link to="/" className="link"><span>Home</span></Link>
        <Link to="/series" className="link"><span>Series</span></Link>
        <Link to="/movies" className="link"><span>Movies</span></Link>
        <span>New and popular</span>
        <span>My List</span>
        
        </div>
        <div className="right">
          <Search className='icon'/>
          <span>KID</span>
         <Notifications className='icon'/>
         <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" alt="profile pic" />
         <div className="profile">
         <ArrowDropDown className='icon'/>
         <div className="options">
          <span>Settings</span>
          <span>Logout</span>
         </div>
         </div>
        
      </div>
      </div>
     
    </div>
  )
}

export default Navbar;
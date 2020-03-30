import React from 'react';
import nav_class from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
    <nav className={nav_class.nav}>
  
    <div className={nav_class.item}>
        <NavLink to="/profile" activeClassName={nav_class.active}> Profile </NavLink> 
         </div>
    <div className={`${nav_class.item} ${nav_class.active}`}>
        <NavLink  to="/dialogs" activeClassName={nav_class.active}>Messages </NavLink> 
         </div>
    <div className='item'>
        <a> News </a> 
         </div>
    <div className='item'>
        <a>Music </a> 
         </div>
    <div className='item'>
        <a> Settings </a>
         </div> 
    </nav>
    )
}


export default Navbar;
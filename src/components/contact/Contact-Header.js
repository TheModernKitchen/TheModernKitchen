import { Link } from "react-router-dom"; 
import React from 'react';
import { useEffect } from "react";
import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;

import {Helmet}from"react-helmet-async";

import "./ContactHeader.css";



const Contact_Header = () => {
  useEffect(() => {
    // search-box open close js code
    let navbar = document.querySelector(".navbar");
    let searchBox = document.querySelector(".search-box .bx-search");
    // let searchBoxCancel = document.querySelector(".search-box .bx-x");
    
    // sidebar open close js code
    let navLinks = document.querySelector(".nav-links");
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
    }
    menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
    }
    
    
    // sidebar submenu open close js code
    
    
    let jsArrow = document.querySelector(".js-arrow");
    jsArrow.onclick = function() {
     navLinks.classList.toggle("show3");
    }
    
    
       }, []);
  return (
    <div>
     <Helmet>
     <title>Contact</title>
     <meta name="description" content="contact about our company"></meta>
    </Helmet>        
    
  <div className="nav-main-main">
    <nav className="nav3">
    <div class="navbar">
 
      <i class='bx bx-menu'></i>
      <div class="logo"><img className="logo-main-main"  src={kitchenlogo} /></div>
      <div class="nav-links">
        <div class="sidebar-logo">
          <span class="logo-name"></span>
          <i class='bx bx-x' ></i>
        </div>
        <ul class="links">
          <li>    <Link className="sub1" to="/"> Home</Link>
       
       </li>
         
          <li>
          <Link className="sub1" to="#">Cabinets</Link>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
              <li>   <Link className="sub" to="/titainum">Titaninum Collection</Link>
        </li>
              <li>  <Link className="sub" to="/platinum">Platinum Collection</Link>
         </li>
              <li><Link className="sub" to="/gold">Gold Collection</Link>
  </li>
              <li>           <Link className="sub" to="/silver">Silver Collection</Link>
</li>
            </ul>
          </li>
          <li><Link className="sub1"  to="/Contact"> Contact</Link>
         </li>
          <li>         <Link className="sub1"  to="/Aboutus"> About</Link>
</li>
        </ul>
      </div>
      
    </div>
  </nav>
  

      
      
          </div>
        
    
        
 

       


    </div>
  )
}

export default Contact_Header;

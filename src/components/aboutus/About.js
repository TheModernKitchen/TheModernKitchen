import { Link } from "react-router-dom"; 
import React from 'react';
import { useEffect } from "react";
import aboutus from '../mainpage/images/aboutus.svg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo-min.png' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Footer from "../footer/Footer";

import '../featurebenefits/feature.css'
import  '../contact/ContactHeader.css'

import './About.css';
import {Helmet}from"react-helmet-async";




const About = () => {
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
     <link rel="canonical" href="/contact"/>
     <meta name="viewport" content="width=device-width, initial-scale=1"/>

       </Helmet>        
  
       <div className="container-main-main">
    <img className='img-front-main-contact' src={aboutus} />
    <div className='center-about'><b>About Us</b></div>
       
 
  <div className="nav-main-main">
    <nav className="nav">
    <div class="navbar">
 
      <i class='bx bx-menu'></i>
      <div class="logo2"><img className="logo-main-main-tit"  src={kitchenlogo} /></div>
      <div class="nav-links">
        <div class="sidebar-logo">
          <span class="logo-name"></span>
          <i class='bx bx-x' ></i>
        </div>
        <ul class="links2">
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
          <li><a className="sub1"  href="../contact/Contact.js">Contact</a>
             </li>
          <li>         <Link className="sub1"  to="/Aboutus"> About</Link>
</li>
<li><Link className="sub2" to="/feature">Benefits</Link>

         </li>
          <li>        <Link className="sub2" to="/term">Terms & Conditions</Link>
</li>

        </ul>
      </div>
      
    </div>
  </nav>
  
</div>
      
      
          </div>
        
       
       


<div className="center-about-details">
<div className="center-about-text">
Matrix Cabinets, a wholesale distributor of high-quality cabinets, opened its doors in 2007. We have a<br/> team that has solidified our position as one of the premier cabinet companies in the southeast. Based in<br/> Baxley, Georgia, Matrix Cabinets boasts a 300,000 square feet facility where they keep a constant supply of <br/>inventory. Conveniently located near the port of Savannah, Georgia.
<br/><br/>
In addition to supplying beautiful, high-quality cabinets, Matrix Cabinets prides itself on exceptional <br/>customer service, with a sales support staff of 50 percent bilingual employees. Over the past ten years,<br/> Matrix Cabinets’ attention to craftsmanship, detail, and customer service have made it a preferred choice<br/> in the cabinet industry
 
</div>

</div>


<Footer/>


    
    </div>
  )
}

export default About;

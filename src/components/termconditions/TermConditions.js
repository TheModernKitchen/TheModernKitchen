import { Link } from "react-router-dom"; 
import React from 'react';
import { useEffect } from "react";

import frontslide from '../mainpage/images/term-min.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo-min.png' ;

import Footer from "../footer/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './TermCondition.css';


import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';

import '../platinum/gallery3.css';
import '../platinum/center.css';

import '../platinum/gallery-layout.css';


import '../platinum/center.css';

import '../featurebenefits/feature.css'
import  './Header-term.css'


const TermConditions = () => {
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


<div className="container-main-main">
    <img className='img-front-main-term' src={frontslide} />
    <div className='center-term'><b>Terms & Conditions</b></div>
             
 
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
        
       
      
      


<div className="center-term-details">
 <div className="center-term-text">
<p className="sm-font">Payments</p> 
 
<p className="sm-medium"> Matric Cabinets accepts various forms of payment; cash, check, certified check, Visa, Mastercard,<br/> American Express, E Check and Wire Transfer. **Matric cabinets reserves the right to request certified<br/> check for any order at any time.</p>

<p className="sm-font">Credit Accounts</p> 
 
<p className="sm-medium"> Matrix Cabinets will not be opening new credit accounts at this time. Please contact your sales<br/> representative for details.</p>
 <p className="sm-font">Taxes and Exemptions</p>
 
 <p className="sm-medium">Matrix Cabinets requires resale certificates for all dealers in every state<br/>
Resale certificates can be faxec to Matrix Cabinets office at (xxx)xxx-xxxx</p>
<p className="sm-font">Returned Checks</p>

<p className="sm-medium">Matrix Cabinets will charge an $35 returned check fee for all returned checks. In Addition, any promotional <br/>discounts will be removed from the invoice and the dealer is responsible for paying the difference. Any<br/> returned checks must be paid in full before additional shipments can be processed. Matrix Cabinets <br/>reserves the right to request cash, credit card, or certified check payments for shipments from any dealer<br/> with multiple returned checks.</p>
 </div>

</div>

<Footer/>



    
    </div>
  )
}

export default TermConditions;

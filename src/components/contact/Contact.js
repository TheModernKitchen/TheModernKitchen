import { Link } from "react-router-dom"; 
import React from 'react';

import { useEffect } from "react";
import kitchenlogo from '../mainpage/images/kitchenlogo-min.png' ;
import Footer from "../footer/Footer";
import contact from './images/contact-min.jpg' ;
import map from './images/map.png' ;
import Captcha from './Captcha';
import {Helmet}from"react-helmet-async";
import '../mainpage/footer.css';
import './contact.css';
import './contact-form.css';
import '../featurebenefits/feature.css'
import Map from './Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import  './ContactHeader.css';



const Contact = () => {
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
     <script src='https://www.google.com/recaptcha/api.js'></script>     
    
    </Helmet>        
    <div className="container-main-main">
    <img className='img-front-main-contact' src={contact} />
    <div className='center-contact'><b>Contact Us</b></div>
        <div className='center-contact2'>Our staff is always available, please take a moment to fill out the 
           form below.</div>
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
          <li><Link className="sub1"  to="/Contact"> Contact</Link>
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
        
    
        
 

       

<div className="container-contact-form">
  <form >
  <label className="label-text" for="fname">Full Name</label>
    <input  type="text" id="fname" name="fname" placeholder="Your name.."/>
    <div class="row-contact">
       <div className="column-contact" >
       <label className="label-text"  for="phone">Phone</label>
       <input   className="pad-contact" type="text" id="phone" name="phone" placeholder="Contact number"/>
       </div>
     <div className="column-contact" >
     <label  className="margright" for="email">Email</label>
     <input  className="margright2" type="text"id="email"name="lastname"placeholder="someone@example.com"/>
     </div>
     </div>
     <label className="label-text"  for="comment">Questions or Comments</label>    <label className="label-text2" >For the quickest and most thorough response please provide a zip code</label>
    <textarea className="comment-contact" id="comment" name="subject" placeholder="Write something.." ></textarea>
   
       <div className="width-captcha">  <Captcha/></div>
       <div className="submit-contact">
     <input className="" type="submit" value="Submit"/>
     </div>
    

   </form>
</div>

<div className="vl-con"></div>
<div className="row-map">
  <div className="column-map" >
    
  <img className='map-img' src={map} />
  <div>
  <div className="icons-contact"><FontAwesomeIcon icon="fa-solid fa-phone" /><a className="contact-icon" href="tel:+1-321-305-7727"><b>Phone:&nbsp;&nbsp;</b>(+1) 321-305-7727</a></div>
  <div className="icons-contact2"><FontAwesomeIcon icon="fa-solid fa-envelope" /><a className="contact-icon" href="mailto:team@themodernkitchen.com"><b> team@themodernkitchen.com </b></a></div>

  </div>
      </div>
  <div className="column-map" >
  <div className="f-size1">
    <Map/>
    
    <i  class='fas'>&#xf3c5;<b style={{marginLeft: "10px"}}>52 Industrial Dr.Baxley, GA. 31513</b></i>
 </div>
   
  </div>
</div>



<div className="row-map-2">
<div className="column-map-2" >
    <div className="f-size2">
    <Map/>
    
    <i  class='fas'>&#xf3c5;<b style={{marginLeft: "10px"}}>52 Industrial Dr.Baxley, GA. 31513</b></i>
 </div>
  </div>
  
  <div className="column-map-2" >
    
  <img className='map-img-2' src={map} />
  <div>
  <div className="icons-contact-2"><FontAwesomeIcon icon="fa-solid fa-phone" /><a className="contact-icon-2" href="tel:+1-321-305-7727"><b>Phone:&nbsp;&nbsp;</b>(+1) 321-305-7727</a></div>
  <div className="icons-contact2-2"><FontAwesomeIcon icon="fa-solid fa-envelope" /><a className="contact-icon-2" href="mailto:team@themodernkitchen.com"><b> team@themodernkitchen.com </b></a></div>

  </div>
      </div>
  
</div>




<div><br/><br/></div>
<Footer/>

    </div>
  )
}

export default Contact;

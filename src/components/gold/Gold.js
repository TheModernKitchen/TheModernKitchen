import { Link } from "react-router-dom"; 
import React from 'react';
import { useEffect } from "react";
import '../platinum/modal/Modal.css';

import Modalg1 from "../platinum/modal/Modalg1";
import Modalg2 from "../platinum/modal/Modalg2";
import Modalg3 from "../platinum/modal/Modalg3";
import useModalg1 from '../platinum/modal/useModalg1';
import useModalg2 from '../platinum/modal/useModalg2';
import useModalg3 from '../platinum/modal/useModalg3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';

import '../platinum/gallery3.css';
import '../mainpage/Main.css'
import '../platinum/gallery-layout.css';

import '../platinum/gallery-layout-2.css';
import '../platinum/center.css';

import frontslide from './images/gslide-min.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo-min.png' ;

import p1 from './images/white-min.jpg' ;
import p2 from './images/g2-min.jpg' ;
import p3 from './images/g3-min.jpg' ;
import p4 from './images/g4-min.jpg' ;
import p5 from './images/white2-min.jpg' ;
import p6 from './images/g6-min.jpg' ;
import p7 from './images/g7-min.jpg' ;
import p8 from './images/g8-min.jpg' ;
import p9 from './images/g9-min.jpg' ;

import Footer from "../footer/Footer";

import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';
import '../platinum/gallery-layout.css';

import '../platinum/gallery3.css';
import '../platinum/center.css';

import './gold.css';

import '../titanium/Header-tit.css';


const Gold  = () => {
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

  const {isShowingg1, toggleg1} = useModalg1();
  const {isShowingg2, toggleg2} = useModalg2();
  const {isShowingg3, toggleg3} = useModalg3();

  return (
    <div>
       
      <div className="container-main-main">
    <img className='img-front-main-tit' src={frontslide} />
    <div className='center-pl-g'><b>Gold Collection</b></div>
      <div className='center-gold-1'>Our versatile and elegant Gold Collection cabinets come in an array of designs and finishes, perfect for elevating the style and feel of your kitchen. As all Forevermark cabinets are designed with the utmost quality and durability, you can rest assured that your kitchen will be beautiful and functional for years to come. Select styles feature Waterborne UV Finishes from Sherwin Williams and Greenguard Gold certification, which ensures that a product is acceptable for use in sensitive indoor places.</div>
    
 
  
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
        
       

          <div className="container-gall1">

<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-gallg1header">K-White (KW)</div>
  <div className="top-left2-gallg1lay">The timeless elegance and versatility of the K-White cabinets provides a classic canvas for your kitchen that is only limited by the imagination.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     </ul>  
     <div className="" >
     <button className="spec2-gallg1spec" onClick={toggleg1}>VIEW SPECS SHEET</button>
     <Modalg1
      isShowingg1={isShowingg1}
      hideg1={toggleg1}
    />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p2} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p3} /></div>

  <div className="centered-gall1"><img className="pl3-goldcenter1" src={p1} /></div>
</div>






<div class="container-gold2">

<div className="bottom-left-lay2"></div>
<div className="top-left-gall-lay2"> <div className="rope-gall-lay2-g2">Ice White Shaker (AW)</div>
  <div className="top-left2-gall-lay2-g2">The Ice White Shaker collection features a clean, simple design that pairs well with any layout or color scheme. Its versatility makes it a popular choice in both modern and traditional homes. The Ice White finish lends a clean, classic look for an elegant kitchen update.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      <li>Waterborne UV Finish</li>
      <li>Greenguard Gold Certified</li>
     </ul>  
     <div className="" >
    <button className="spec2-gall2-g2" onClick={toggleg2}>VIEW SPECS SHEET</button>
    <Modalg2
         isShowingg2={isShowingg2}
         hideg2={toggleg2}
              />
          
    </div>
  </div>
 </div>
   <div className="">
   <img className='pl1-gall-lay2' src={p4} /> 
   </div>

</div>

<div className="top-right-gall-lay2"><img className="pl2-gall-lay2" src={p6} /></div>

  <div className="centered-gall-lay2"><img className="pl3-gall-lay2-gcenter2" src={p5} /></div>
  
  
  

</div>



<div className="container-gold3">

<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-gallg3header">Pepper Shaker (AP)</div>
  <div className="top-left2-galls1">With its warm, inviting finish and intricate panel detailing, Sienna Rope provides an elegant, timeless update and classic beauty to the kitchen.

    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      <li>Waterborne UV Finish</li>
      <li>Greenguard Gold Certified</li>
     </ul>  
     <div className="" >
     <button className="spec2-gallg3spec" onClick={toggleg3}>VIEW SPECS SHEET</button>
     <Modalg3
      isShowingg3={isShowingg3}
      hideg3={toggleg3}
    />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p7} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p9} /></div>
<div className="centered-galls1"><img className="pl3-goldcenter3" src={p8} /></div>

</div>

<div className="marg-gold">m</div>



 
<div>
         
 







 </div>


    
 <Footer/>

    </div>
  )
}

export default Gold;

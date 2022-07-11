import { Link } from "react-router-dom"; 
import React from 'react';
import { useEffect } from "react";
import '../platinum/modal/Modal.css';

import Modalt1 from "../platinum/modal/Modalt1";
import Modalt2 from "../platinum/modal/Modalt2";
import Modalt3 from "../platinum/modal/Modalt3";
import useModalt1 from '../platinum/modal/useModalt1';
import useModalt2 from '../platinum/modal/useModalt2';
import useModalt3 from '../platinum/modal/useModalt3';


import frontslide from './images/tslide-min.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo-min.png' ;

import p1 from './images/t1-min.jpg' ;
import p2 from './images/t2-min.jpg' ;
import p3 from './images/t3-min.jpg' ;
import p4 from './images/t4-min.jpg' ;
import p5 from './images/t5-min.jpg' ;
import p6 from './images/t6-min.jpg' ;
import p7 from './images/t7-min.jpg' ;
import p8 from './images/t8-min.jpg' ;
import p9 from './images/t9-min.jpg' ;

import Footer from "../footer/Footer";

import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';

import '../platinum/gallery3.css';
import '../platinum/center.css';

import '../platinum/gallery-layout.css';


import '../platinum/center.css';
import  './Header-tit.css'


const Titaninum  = () => {
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
    
  const {isShowingt1, togglet1} = useModalt1();
  
  const {isShowingt2, togglet2} = useModalt2();
  
  const {isShowingt3, togglet3} = useModalt3();
  return (
    <div>
        <div className="container-main-main">
    <img className='img-front-main-tit' src={frontslide} />
    <div className='center-pl'><b>Titaninum Collection</b></div>
      <div className='center-pl2'>Our versatile and elegant Gold Collection cabinets come in an array of designs and finishes, perfect for elevating the style and feel of your kitchen. As all Forevermark cabinets are designed with the utmost quality and durability, you can rest assured that your kitchen will be beautiful and functional for years to come. Select styles feature Waterborne UV Finishes from Sherwin Williams and Greenguard Gold certification, which ensures that a product is acceptable for use in sensitive indoor places.</div>
   
 
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
<div className="top-left-gall1"> <div className="rope-gall1-tit">Nova Light Grey Shaker (AN)</div>
  <div className="top-left2-gall1-tit">These classic shaker cabinets feature a subtle wood grain look that lends interest to the kitchen design. Clean lines provide a fresh feel to any kitchen.
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
     <button className="spec2-gall2" onClick={togglet1}>VIEW SPECS SHEET</button>
     <Modalt1
        isShowingt1={isShowingt1}
        hidet1={togglet1}
              />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p1} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p3} /></div>

  <div className="centered-gall1"><img className="pl3-galltti1" src={p2} /></div>
</div>




<div class="container-g2">
   
<div className="bottom-left-lay2"></div>
<div className="top-left-gall-lay2"> <div className="rope-gall-lay2-tit2">Midtown Grey (TG)</div>
  <div className="top-left2-gall-lay2-tit2"> For a contemporary, modern look, the Midtown Grey cabinets are the perfect choice for a clean, updated feel.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     </ul>  
     <div className="" >
    <button className="spec2-gall2-g2" onClick={togglet2}>VIEW SPECS SHEET</button>
    <Modalt2
         isShowingt2={isShowingt2}
         hidet2={togglet2}
              />
          
    </div>
  </div>
 </div>
   <div className="">
   <img className='pl1-gall-lay2' src={p4} /> 
   </div>

</div>

<div className="top-right-gall-lay2"><img className="pl2-gall-lay2" src={p6} /></div>

  <div className="centered-gall-lay2"><img className="pl3-gall-lay2-p4" src={p5} /></div>
  
  
  

</div>



<div className="container-g3">
<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-gallt3">Townplace Crema (TQ)</div>
  <div className="top-left2-gallt3">The Townplace Crema cabinets are the perfect choice for a soft, inviting kitchen. With detailing on the door panels and clean lines, they lend an updated, yet cozy feel to the kitchen.
    <div>
     <ul className="ul1-gall-layout">
     <li>Constructed of solid birch</li>
    <li>Undermount, full extension drawer glides with soft closing feature</li>
    <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
    <li>Concealed 6-way adjustable soft close door hinges</li>
    
     
     </ul>  
     <div className="" >
     <button className="spec2-gallt3" onClick={togglet3}>VIEW SPECS SHEET</button>
     <Modalt3
                isShowingt3={isShowingt3}
                hidet3={togglet3}
              />
          

     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p7} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p9} /></div>

  <div className="centered-galls1"><img className="pl3-galltit3" src={p8} /></div>


</div>






<div className="marg-b">m</div>


 
<div>
         
 







 </div>


<Footer/>
    
    </div>
  )
}

export default Titaninum;

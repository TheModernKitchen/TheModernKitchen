import { Link } from "react-router-dom"; 
import React from 'react';

import { useEffect } from "react";
import '../platinum/modal/Modal.css';

import Modal from "./modals1/Modals1";
import Modals2 from "./modals2/Modals2";
import Modals3 from "./modals3/Modals3";

import useModal1 from "./modals1/useModal";
import useModals2 from "./modals2/useModals2";
import useModals3 from "./modals3/useModals3";

import frontslide from './images/silverlogo-min.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo-min.png' ;

import p1 from './images/s1-min.jpg' ;
import p2 from './images/s2-min.jpg' ;
import p3 from './images/s3-min.jpg' ;
import p4 from './images/s4-min.jpg' ;
import p5 from './images/s5-min.jpg' ;
import p6 from './images/s6-min.jpg' ;
import p7 from './images/s7-min.jpg' ;
import p8 from './images/s8-min.jpg' ;
import p9 from './images/s9-min.jpg' ;

import Footer from "../footer/Footer";

import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';

import '../platinum/gallery3.css';
import '../mainpage/Main.css'
import '../platinum/gallery-layout.css';

import '../platinum/gallery-layout-2.css';
import '../platinum/center.css';


import './silver.css';

import '../titanium/Header-tit.css';


const Silver  = () => {
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
    
  const {isShowing, toggle} = useModal1();
  const {isShowings2, toggles2} = useModals2();
  const {isShowings3, toggles3} = useModals3();
  
  return (
    <div>
        <div className="container-main-main">
    <img className='img-front-main-tit' src={frontslide} />
    <div className='center-pl-s'><b>Silver Collection</b></div>
      <div className='center-pl2-s'>Our Silver Collection features the K-Series line of cabinets, which are designed with a timeless, traditional door profile and versatile color palette to give any kitchen an updated, classic look.</div>
   
 
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
        
        


        
          <div className="container-gall1">

<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-galls1">K-Cherry Glaze (KC)</div>
  <div className="top-left2-galls1">The K-Cherry Glaze cabinet line is the perfect choice for a warm, inviting kitchen of timeless beauty. With our Forevermark limited warranty, you can be assured that these cabinets are reliable and durable enough to stand the test of time and use.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     </ul>  
     <div className="" >
     <button className="spec2-galls1" onClick={toggle}>VIEW SPECS SHEET</button>
    <Modal
      isShowing={isShowing}
      hide={toggle}
    />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p1} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p3} /></div>

  <div className="centered-gall1"><img className="pl3-gallsilver1" src={p2} /></div>
</div>




<div class="container-g2">
<div className="bottom-left-lay2"></div>
<div className="top-left-gall-lay2"> <div className="rope-gall-lay2">K-Cinnamon Glaze (KM)</div>
  <div className="top-left2-gall-lay2"> Our K-Cinnamon Glaze line features the timeless elegance of natural wood cabinets, finished in classic cinnamon tones. Designed with quality and reliability at the forefront, these cabinets provide a beautiful and durable update to any kitchen.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     </ul>  
     <div className="" >
     <button className="spec2-gall2-s2" onClick={toggles2}>VIEW SPECS SHEET</button>
     <Modals2
      isShowings2={isShowings2}
      hides2={toggles2}
    />

     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall-lay2' src={p6} /> 
   </div>

</div>

<div className="top-right-gall-lay2"><img className="pl2-gall-lay2" src={p4} /></div>

  <div className="centered-gall-lay2"><img className="pl3-gall-laysilver2" src={p5} /></div>

</div>



<div className="container-silver">
<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-galls3">K-Espresso (KE)</div>
  <div className="top-left2-galls3">Our K-Espresso line provides the beauty of natural wood finish with darker espresso tones, giving kitchens an updated, modern look. As all Forevermark cabinets are designed with the utmost quality and durability, you can rest assured that your kitchen will be beautiful and functional for years to come.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     
     </ul>  
     <div className="" >
     <button className="spec2-gallsilver3" onClick={toggles3}>VIEW SPECS SHEET</button>
    <Modals3
      isShowings3={isShowings3}
      hides3={toggles3}
    />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p7} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p9} /></div>

  <div className="centered-galls1"><img className="pl3-galls1" src={p8} /></div>


</div>







 
<div>
         
 




<div className="marg-silver">m</div>



 </div>

 <Footer/>

    
    </div>
  )
}

export default Silver;

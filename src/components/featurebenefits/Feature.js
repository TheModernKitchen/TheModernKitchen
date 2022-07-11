import { Link } from "react-router-dom"; 
import React from 'react';
import { useEffect } from "react";

import frontslide from '../mainpage/images/featurelogo-min.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo-min.png' ;


import f1 from '../mainpage/images/l1-min.png' ;

import f3 from '../mainpage/images/l3-min.png' ;
import f2 from '../mainpage/images/l2-min.png' ;

import m1 from '../mainpage/images/mark1-min.png' ;

import m2 from '../mainpage/images/mark2-min.png' ;
import m3 from '../mainpage/images/mark3-min.png' ;
import m4 from '../mainpage/images/mark4-min.png' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './feature.css';
import Footer from "../footer/Footer";
import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';

import '../platinum/gallery3.css';
import '../mainpage/Main.css'
import '../platinum/gallery-layout.css';

import '../platinum/gallery-layout-2.css';
import '../platinum/center.css';



const Feature = () => {
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


          <div className='label-feature-2'><b>Our Commitment to Quality</b></div>
       
       <br/>

       
<div className="container-feature">
<h3 className="feature-h3">California Air Resources Board</h3>
<div className="center-feature-details">
<div className="center-feature-text">
Forevermark is constantly striving to meet and surpass all requirements for high quality cabinetry. As such,<br/> Forevermark Cabinetry products meet the California Air Resources Board’s current standards for<br/> certification. CARB labeling indicating compliance is on each box and product. The California Air Resources <br/>Board regulates air quality by ensuring that materials and air emissions meet the most stringent <br/>requirements. For more Information, please feel free to vist www.arb.ca.gov.
</div>
</div>
  <div className="top-right-feature">
 
<img className='feature-logo' src={f1} />

 </div>
  
</div>


<div className="container-feature">
<h3 className="feature-h3">Kitchen Cabinet Manufacturers Association</h3>
<div className="center-feature-details">
<div className="center-feature-text">
Forevermark is proud to offer assembled cabinets that are KCMA crtified. KCMA certified cabinets are<br/> recognized in the marketplace as a quality product able to perform after a rigorous battery of tests<br/> simulating years of household use. For more Information, please feel free to contact our office or<br/> vist.www.kcma.org.
</div>
</div>
  <div className="top-right-feature">
 
<img className='feature-logo2' src={f2} />

 </div>
  
</div>


<div className="container-feature">
<h3 className="feature-h3">Kitchen Cabinet Manufacturers Association</h3>
<div className="center-feature-details">
<div className="center-feature-text">
Forevermark is a member at the National Kitchen & Bath Association. Being part of this association keeps<br/> us informed with the latest news and developments in the industry, For more information, please feel free<br/> to contact our offices or vist www.nkba.org.
</div>
</div>
  <div className="top-right-feature">
 
<img className='feature-logo3' src={f3} />

 </div>
  
</div>
<div>
<img className='feature-logo-mbl1' src={f1} />
<h3 className="feature-h3-mbl">California Air Resources Board</h3>
<div className="center-feature-details-mbl">
<div className="center-feature-text-mbl">
Forevermark is proud to offer assembled cabinets that are KCMA crtified. KCMA certified cabinets are<br/> recognized in the marketplace as a quality product able to perform after a rigorous battery of tests<br/> simulating years of household use. For more Information, please feel free to contact our office or<br/> vist.www.kcma.org.
</div>
</div>
</div>

<div>
<img className='feature-logo-mbl1' src={f2} />
<h3 className="feature-h3-mbl">Kitchen Cabinet Manufacturers Association</h3>
<div className="center-feature-details-mbl">
<div className="center-feature-text-mbl">
Forevermark is proud to offer assembled cabinets that are KCMA crtified. KCMA certified cabinets are<br/> recognized in the marketplace as a quality product able to perform after a rigorous battery of tests<br/> simulating years of household use. For more Information, please feel free to contact our office or<br/> vist.www.kcma.org.
</div>
</div>
</div>

<div>
<img className='feature-logo-mbl1' src={f3} />
<h3 className="feature-h3-mbl">Kitchen Cabinet Manufacturers Association</h3>
<div className="center-feature-details-mbl">
<div className="center-feature-text-mbl">
Forevermark is a member at the National Kitchen & Bath Association. Being part of this association keeps<br/> us informed with the latest news and developments in the industry, For more information, please feel free<br/> to contact our offices or vist www.nkba.org.
</div>
</div>
</div>

<div className="feature-in"><h3>FEATURED IN</h3></div>
<div className="pad-feature-mark">
<div className="row-feature-mark">
  <div className="column-feature-mark">
  <img className='mark-mr1' src={m1} />
   </div>
  <div className="column-feature-mark">
  <img className='mark-mr' src={m2} />
   </div>
  <div className="column-feature-mark">
  <img className='mark-mr2' src={m3} />
    </div>
    
  <div className="column-feature-mark">
  <img className='mark-mr3' src={m4} />
    </div>
</div>
</div>
<div className="vl-feature"></div>
<Footer/>
</div>
  )
}

export default Feature;

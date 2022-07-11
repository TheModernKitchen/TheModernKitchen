import { Link } from "react-router-dom"; 
import React from 'react';
import {Helmet}from"react-helmet-async";
import logo1 from './images/mainpage-min.jpg' ;
import platinum from './images/plat-min.jpg' ;
import titanium from './images/titanium-min.jpg' ;
import gold from './images/gold-min.jpg' ;
import silver from './images/silver-min.jpg' ;
import collection1 from './images/collection1.png' ;
import mask1 from './images/mask1-min.jpg' ;

import logo4 from './images/logo-center-4-min.jpg' ;
import mask2 from './images/mask2-min.jpg' ;
import mask3 from './images/mask3-min.jpg' ;
import mask4 from './images/mask4-min.jpg' ;
import kitchenlogo from './images/kitchenlogo-min.png' ;
import Footer from "../footer/Footer";

import { useEffect } from "react";
import './Main.css';
import './Navbar.css';
import './over.css';
import './dropdown.css';
import './center.css';

import './collection.css';
import './center3.css';

import './center4.css';



const MainPage = () => {
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
     <title>The Modern Kitchen</title>
     <link rel="canonical" href="/"/>
     <meta charset="utf-8"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

          
    </Helmet>        
    <div className="container-main-main">
    <img className='img-front-main' src={logo1} />
    <div className='center21-main-main'><b>Our Commitment<br/>to Quality</b></div>
    <div className='center22-main-main'>We offer Ready to Assemble (RTA) cabinets that are KCMA <br/>certified. KCMA certified cabinets are recognized in the <br/>marketplace as a quality product able to perform after  a<br/> rigorous battery to tests simulating years of household use.</div>
        <div className='center3-main-main'><b>BROWSE OUR CABINETS  </b></div>
 
  <div className="nav-main-main">
    <nav>
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



 


 
 
         <div className="collection-container" >
           
           <img  className="collection-logo" src={collection1} />
         <div className="bottom-left-c"> <Link to="/gold"> 
          <div class="container-ovr">
          <img className='img' src={gold} />
            <div class="overlay-ovr">
             </div>
            </div>
        </Link> 
        
        <p className="semi">Gold</p>

        </div>
  <div className="top-left-c"> <Link to="/platinum"> 
          <div class="container-ovr">
          <img className='img' src={platinum} />
            <div class="overlay-ovr">
              </div>
            </div>
        </Link> 
        <p className="semi"> Platinum</p>

          </div>
  <div className="top-right-c"><Link to="/titainum"> 
          <div class="container-ovr">
          <img className='img' src={titanium} />
            <div class="overlay-ovr">
              </div>
            </div>
        </Link>
        <p className="semi">Titaninum</p>
 
          </div>
  <div className="bottom-right-c"><Link to="/silver"> 
          <div class="container-ovr">
          <img className='img' src={silver} />
            <div class="overlay-ovr">
              </div>
            </div>
            
        </Link> 
        <p className="semi"> Silver</p>
          </div>
  
         </div>
         
         
         
         
         
         <div className="slideshow-container">
           
<div className="">

<div id="myCarousel" className="carousel slide" data-ride="carousel">
  
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel"  data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>
  


   <div className="carousel-inner">

    <div className="item active">
    <Link to="/gold"> 
          <img className='img' src={gold} />
          
      </Link> 
      <div className="carousel-caption">
       <div className="text">
        <p > Gold Collection</p>
        </div>
        </div>
 

        
    </div>

    <div className="item">
    <Link to="/platinum"> 
             <img className='img' src={platinum} />
        
         </Link> 
         <div className="carousel-caption">
       <div className="text">
        <p className="semi"> Platinum Collection</p>
        </div>
        </div>
        
</div>
  
    <div className="item">
    <Link to="/titainum"> 
         <img className='img' src={titanium} />
         </Link>
         <div className="carousel-caption">
       <div className="text">
        <p className="semi"> Titaninum Collection</p>
        </div>
        </div>
 

    </div>

    <div className="item">
    <Link to="/silver"> 
        <img className='img' src={silver} />
          
      </Link> 
      <div className="carousel-caption">
       <div className="text">
        <p className="semi"> Silver Collection</p>
        </div>
        </div>


    </div>

  </div>

  
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>


   
</div>
</div>
   


          </div>
<br/>


        
        <div className='center3-mainpage-margin3' >
 
         <div className='row2-main-page-center'>
 
 <div className='column2-main-page-center' >
    <div className='row3-main-page-center'>
      <div className='column3-main-page-center'>
         <a href="#" target="_blank" rel="noreferrer">
           <img className='img12-main-page-center' src={mask1} />
         </a>  
 
         <a href="#" target="_blank" rel="noreferrer">
           <img className='img2-main-page-center' src={mask2} />
         </a>  
 
   </div>
   
 <div className='column3-main-page-center' >
   <a href="#" target="_blank" rel="noreferrer">
           <img className='img13-main-page-center' src={mask3} />
         </a>  
 
         <a href="#" target="_blank" rel="noreferrer">
           <img className='img13-main-page-center' src={mask4} />
         </a>  
 
 </div>
</div>


   
 </div>
 <div className='column4-main-page-center' >
   <div className='about-main-page-center'><p className="semi">About Us</p></div>
   <p className='p2-main-page-center'>Matrix Cabinets, a wholesale distributor of high-quality cabinets, opened its doors in 2007.<br/> We have a team that has solidified our position as one of the premier cabinet companies<br/> in the southeast. Based in Baxley, Georgia, Matrix Cabinets boasts a 300,000 square feet <br/>facility where they keep a constant supply of inventory. Conveniently located near the <br/>port of Savannah, Georgia.<br/><br/>

    In addition to supplying beautiful, high-quality cabinets, Matrix Cabinets prides itself on<br/> exceptional customer service, with a sales support staff of 50 percent bilingual<br/> employees. Over the past ten years, Matrix Cabinets’ attention to craftsmanship, detail,<br/> and customer service have made it a preferred choice in the cabinet industry</p>
    <p className='p3-main-page-center'>Matrix Cabinets, a wholesale distributor of high-<br/>quality cabinets, opened its doors in 2007. We have a<br/> team that has solidified our position as one of the<br/> premier cabinet companies in the southeast. Based <br/>in Baxley, Georgia, Matrix Cabinets boasts a 300,000 <br/>square feet facility where they keep a constant<br/> supply of inventory. Conveniently located near the <br/>port of Savannah, Georgia.<br/><br/>

In addition to supplying beautiful, high-quality<br/> cabinets, Matrix Cabinets prides itself on exceptional <br/>customer service, with a sales support staff of 50 <br/>percent bilingual employees. Over the past ten <br/>years, Matrix Cabinets’ attention to craftsmanship,<br/> detail, and customer service have made it a<br/> preferred choice in the cabinet industry</p>


     <div className=''>
      <b><Link to="/Aboutus"><p className="readmore-main-page-center" >Read More</p></Link></b>
 
     
      </div> 
 </div>
</div>
</div>
<div class="container-main-center4">
<img className='img-center4' src={logo4} />
  <div >     <Link className="bottom-left-4"  to="/Contact">Contact Us, We’ll be happy to help you out! </Link></div>
  <div className="top-left-4">Many homeowners, parents, and families spend a good chunk of their day there, cooking, eating, chatting, packing <br/>lunches, and so on. Out of necessity, kitchens also have long-wearing fixtures and finishes, so in the busyness of everyday<br/> life, it’s easy not to notice that a kitchen is slowly aging until something cracks, breaks, or is suddenly so dingy that kitchen<br/> remodeling is necessary. A bright fresh kitchen can make time spent in your home feel better, even if it’s a simple refresh.<br/> But how much does a new kitchen or a kitchen remodel cost</div>
  <div className="top-left-4-2">Many homeowners, parents, and families<br/> spend a good chunk of their day there, cooking,<br/> eating, chatting, packing lunches, and so on.<br/> Out of necessity, kitchens also have long-<br/>wearing fixtures and finishes, so in the<br/> busyness of everyday life, it’s easy not to notice<br/> that a kitchen is slowly aging until something <br/>cracks, breaks, or is suddenly so dingy that<br/> kitchen remodeling is necessary. A bright fresh<br/> kitchen can make time spent in your home feel <br/>better, even if it’s a simple refresh. But how <br/>much does a new kitchen or<br/> a kitchen remodel cost</div>


  <div className="top-right-4"><b>In many homes, the kitchen<br/> is a hive of daily activity</b></div>
</div>
<div className="marg-up">

    </div>
    <Footer/>

    </div>
  )
}

export default MainPage;



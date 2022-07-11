import React from 'react';
import { Link } from "react-router-dom"; 

import kitchenlogo from '../mainpage/images/kitchenlogo-min.png' ;


import './featurefooter.css';


const Footer = () => {
  return (
    <div>
   <div className="footer-below">
  <img className='logo-img-footer' src={kitchenlogo} />
  <p className='footer-copyright'>Copyright &copy; 2022 The Modern Kitchens.All Right Reserved.</p>
  
<div className="link-footer">
<a className="link-footer-link"  href="../aboutus/About.js">About Us</a>
<a className="link-footer-link"  href="../contact/Contact.js">Contact</a>
<a className="link-footer-link"  href="#">Catalog</a>

<Link className="link-footer-link" to="/feature">Benefits</Link>

<Link className="link-footer-link" to="/term">Terms & Conditions</Link>
</div>
   

  </div>
  <div className="footer-below-2">
  <img className='logo-img-footer-2' src={kitchenlogo} />
  <p className='footer-copyright-2'>Copyright &copy; 2022 The Modern Kitchens.All Right Reserved.</p>

  <Link className="link-footer-link-term-2" to="/term">Terms & Conditions</Link>  
<div className="link-footer-2">
<a className="link-footer-link-2"  href="../aboutus/About.js">About Us</a>
<a className="link-footer-link-2"  href="../contact/Contact.js">Contact</a>
<a className="link-footer-link-2"  href="#">Catalog</a>

<Link className="link-footer-link-2" to="/feature">Benefits</Link>

</div>
   

  </div>

 </div>
  )
}

export default Footer;

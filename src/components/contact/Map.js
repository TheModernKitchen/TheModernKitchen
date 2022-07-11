import React from 'react';


import {Helmet}from"react-helmet-async";

import  './Map.css';



const Contact = () => {
   

  return (
    <div>
     <Helmet>
     <title>Add Map</title>

     <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

    </Helmet>        
    <div className='map' >
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.5882382496065!2d-82.34686908550987!3d31.781714741371633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f0732090e414b5%3A0x70a38be97d4cea2f!2s52%20Industrial%20Dr%2C%20Baxley%2C%20GA%2031513%2C%20USA!5e0!3m2!1sen!2s!4v1657357244048!5m2!1sen!2s" className='map'   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}

export default Contact;

import React, { useState, useEffect } from 'react';


const Footer = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);



  return (
    <div className="Footer">
        <div className="FooterContent">
            <span>Designed and built by Austin H. Ogola</span>
            <p><span>GIT</span> <span>LinkedIn</span></p>
        </div>
   
     
    </div>
  );
};

export default Footer;
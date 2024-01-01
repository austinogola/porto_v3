import React, { useState, useEffect } from 'react';


const Contacts = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
    
          setIsScrollingUp(currentScrollPos < prevScrollPos);
    
          setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos]);

  return (
    <div className="Contacts" id='contacts'>
        <div className="sectionIntro">
            <span id='num'>03. </span><span id='h1'>Contact Me</span>
          </div>

        <div className="ContactContent">
          <p>
          Looking to get in touch with me? Feel free to send me a message. Whether you have an inquiry, 
          an opportunity to discuss or just want to say hi, my inbox is open.
          </p>
        </div>

        <span>
          <a href='#email'><button>Contact Me</button></a>
        </span>

        
      
    </div>
  );
};

export default Contacts;
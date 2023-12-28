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
                <hr/><h1>Get in touch</h1><hr/> 
            </div>

        <div className="ContactContent">
          <p>
          Looking to get in touch with me? Feel free to send me a message. Whether you have an inquiry, 
          an opportunity to discuss or just want to say hi, my inbox is always open. I’ll try my best to 
          get back to you ASAP!
          </p>
        </div>

        <button>
          Contact Me
        </button>
      
    </div>
  );
};

export default Contacts;
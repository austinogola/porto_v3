import React, { useState, useEffect } from 'react';


const Navbar = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
          if(currentScrollPos<=70){
            setIsScrollingUp(true)
          }else{
            setIsScrollingUp(currentScrollPos < prevScrollPos);
         
          }
          setPrevScrollPos(currentScrollPos);

          
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos]);

  return (
    <nav  className={`navbar ${isScrollingUp ? 'visible' : 'hidden'}`}>
      <a className='navItem' href="#intro">
        <span id='num'>01. </span>
        <span>Home</span> 
    </a>
      <a className='navItem' href="#about">
        <span id='num'>02. </span>
        <span>About</span> 
      </a>
      <a className='navItem' href="#projects">
        <span id='num'>03. </span>
        <span>Portfolio</span> 
      </a>
      <a className='navItem' href="#contacts">
        <span id='num'>04. </span>
        <span>Contact</span> 
      </a>
    </nav>
  );
};

export default Navbar;
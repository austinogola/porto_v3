import React, { useState, useEffect } from 'react';


const Navbar = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
          console.log(currentScrollPos);
          if(currentScrollPos<=70){
            setIsScrollingUp(true)
          }else{
            setIsScrollingUp(currentScrollPos < prevScrollPos);
            console.log(currentScrollPos < prevScrollPos);
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
      <a className='navItem' href="#about">
        <span id='num'>01. </span>
        <span>About</span> 
    </a>
      <a className='navItem' href="#experience">
        <span id='num'>02. </span>
        <span>Experience</span> 
      </a>
      <a className='navItem' href="#projects">
        <span id='num'>03. </span>
        <span>Projects</span> 
      </a>
      <a className='navItem' href="#contacts">
        <span id='num'>04. </span>
        <span>Contact me</span> 
      </a>
    </nav>
  );
};

export default Navbar;
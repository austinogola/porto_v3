import React, { useState, useEffect } from 'react';


const About = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);



  return (
    <div className="About" id='about'>
            <div className="sectionIntro">
                <hr/><h1>About Me</h1><hr/> 
            </div>

            <div className='AboutContent'>
                <div>
                    <p>
                        Since beginning my journey as a freelance designer over 11 years ago, I've done remote work 
                        for agencies, consulted for startups, and collaborated with talented people to create digital 
                        products for both business and consumer use. I'm quietly confident, naturally curious, and 
                        perpetually working on improving my chops one design problem at a time.
                    </p>
            
                </div>
                <div>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>TypeScript</li>
                        <li>Node.js</li>
                        <li>React</li>
                        <li>Flask</li>
                        <li>Chrome Extensions</li>
                    </ul>
                </div>
            </div>

            
        
   
     
    </div>
  );
};

export default About;
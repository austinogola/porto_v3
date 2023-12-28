import React, { useState, useEffect } from 'react';


const About = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);



  return (
    <div className="About" id='about'>
            <div className="sectionIntro">
            <span id='num'>01. </span><span id='h1'> About Me</span>
            </div>

            <div className='AboutContent'>
                <div>
                    <p>
                        Hi, my name is Austin, and I enjoy building things that live on the web. My 
                        expertise involves designing and developing all aspects of a web application; 
                        designing and developing backend functionality, developing custom frontend web 
                        UI/UX and developing supporting infrastacture.
                    </p>
                    <p>
                        Since beginning my journey as a web developer, I’ve had the privilege of working 
                        remotely for a startup, consulting for an agency,and collaborating with several 
                        other talented people to create digital products for both business and consumer use. 
                    </p>
                    <p>
                        I am naturally curious, and perpetually working on improving my chops one web application at a time.
                    </p>

                    <p>
                        Technologies I mainly work with day to day:
                    </p>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Chrome extensions</li>
                    </ul>
            
                </div>
                {/* <div>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>TypeScript</li>
                        <li>Node.js</li>
                        <li>React</li>
                        <li>Flask</li>
                        <li>Chrome Extensions</li>
                    </ul>
                </div> */}
            </div>

            
        
   
     
    </div>
  );
};

export default About;
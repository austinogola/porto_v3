import React, { useState, useEffect } from 'react';


const Projects = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

   

  return (
    <div className="Projects" id='projects'>
        <div className="sectionIntro">
            <span id='num'>03. </span><span id='h1'>Recent Work</span>
          </div>

        <div className="ProjectsMenu">
          <ul className="ProjectsMenuList">
            <li>All</li>
            <li>React/Next</li>
            <li>Node.js</li>
            <li>Python</li>

          </ul>
        </div>

        

        <div className="ProjectsContent">
          <div className='projectParent'>
              Ghostmail
          </div>
          <div className='projectParent'>
              LinkedIn API
          </div>
          <div className='projectParent'>
              oAuth library
          </div>
          <div className='projectParent'>
              MPESA APP
          </div>
          <div className='projectParent'>
              LinkedIn AI
          </div>
          <div className='projectParent'>
              Amazon Affiliate  
          </div>
          <div className='projectParent'>
              Graphing JS Library 
          </div>
        </div>
    </div>
  );
};

export default Projects;
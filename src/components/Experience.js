import React, { useState, useEffect } from 'react';


const Experience = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    

  return (
    <div className="Experience" id='experience'>
        <div className="sectionIntro">
                <hr/><h1>Where I have worked</h1><hr/> 
          </div>

          <div className="ExperienceContent">
              <ul>
                <li>Jags</li>
                <li>Lydian AI</li>
                <li>Freelance</li>
              </ul>
          </div>
    </div>
  );
};

export default Experience;
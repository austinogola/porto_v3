import React, { useState, useEffect } from 'react';


const Experience = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    

  return (
    <div className="Experience" id='experience'>
        <div className="sectionIntro">
            <span id='num'>02. </span><span id='h1'> Where I've worked</span>
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
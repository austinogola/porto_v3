import React, { useState, useEffect } from 'react';


const Experience = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleChange=(e)=>{
      const expComps=document.querySelectorAll('.expComp')
      const roleDetails=document.querySelectorAll('.roleDetails')
      expComps.forEach(item=>{
        if(item==e.target){
          item.classList.add('active')
        }else{
          item.classList.remove('active')
        }
        roleDetails.forEach(item=>{
          if(item.id==e.target.id){
            item.classList.add('active')
          }else{
            item.classList.remove('active')
          }
        })
      })
    }

    // useEffect(() => {
    //   const handleChange = () => {
    //     const currentScrollPos = window.scrollY;
    //     console.log(currentScrollPos);
    //     if(currentScrollPos<=70){
    //       setIsScrollingUp(true)
    //     }else{
    //       setIsScrollingUp(currentScrollPos < prevScrollPos);
    //       console.log(currentScrollPos < prevScrollPos);
    //     }
    //     setPrevScrollPos(currentScrollPos);

        
    //   };
  
    //   window.addEventListener('scroll', handleChange);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleChange);
    //   };
    // }, [prevScrollPos]);

    

  return (
    <div className="Experience" id='experience'>
        <div className="sectionIntro">
            <span id='num'>02. </span><span id='h1'> Where I've worked</span>
          </div>

          <div className="ExperienceContent">
            <ul className="experienceCompanies">
              <li className='expComp active' id='Lydian' onClick={handleChange}>Lydian AI</li>
              <li className='expComp' id='Jaguar' onClick={handleChange}>Jaguar</li>
              <li className='expComp' id='Freelance' onClick={handleChange}>Freelance</li>
              <li className='expComp' id='Interno' onClick={handleChange}>Interno</li>
            </ul>
            <div className="experienceDetails">
              <div className='roleDetails active' id='Lydian'>
                <span className='roleTitle'>Lead Engineer <a href='#Lydian'>@ Lydian</a></span><br/>
                <span className='roleDate'>August 2022 - Present</span>
                <ul>
                  <li>Work alongside creative directors to lead the research, development, and 
                    architecture of technical solutions to fulfill business requirements</li>
                  <li>Collaborate with designers, project managers, and other engineers to transform 
                    creative concepts into production realities for clients and stakeholders</li>
                  <li>
                  Provide leadership within engineering department through close collaboration,
                   knowledge shares, and mentorship</li>
                   <li>
                   Architected and implemented the user interface of Apple Music's embeddable web player 
                   widget for in-browser user authorization and full song playback
                   </li>
                </ul>
              </div>

              <div className='roleDetails' id='Jaguar'>
                <span className='roleTitle'>Backend Developer <a href='#Jaguar'>@ Jaguar</a></span><br/>
                <span className='roleDate'>April 2021 - August 2022</span>
                <ul>
                  <li>Work alongside creative directors to lead the research, development, and 
                    architecture of technical solutions to fulfill business requirements</li>
                  <li>Collaborate with designers, project managers, and other engineers to transform 
                    creative concepts into production realities for clients and stakeholders</li>
                  <li>
                  Provide leadership within engineering department through close collaboration,
                   knowledge shares, and mentorship</li>
                </ul>
              </div>

              <div className='roleDetails' id='Freelance'>
              <span className='roleTitle'>Web Developer <a href='#Freelance'>@ Freelancing</a></span><br/>
                <span className='roleDate'>April 2020 - Present</span>
                <ul>
                  <li>Work alongside creative directors to lead the research, development, and 
                    architecture of technical solutions to fulfill business requirements</li>
                  <li>Collaborate with designers, project managers, and other engineers to transform 
                    creative concepts into production realities for clients and stakeholders</li>
                  <li>
                  Provide leadership within engineering department through close collaboration,
                   knowledge shares, and mentorship</li>
                </ul>
              </div>

              <div className='roleDetails' id='Interno'>
                <span className='roleTitle'>Software Intern <a href='#Interno'>@ Interno</a></span><br/>
                <span className='roleDate'>April 2019 - December 2019</span>
                <ul>
                  <li>Work alongside creative directors to lead the research, development, and 
                    architecture of technical solutions to fulfill business requirements</li>
                  <li>Collaborate with designers, project managers, and other engineers to transform 
                    creative concepts into production realities for clients and stakeholders</li>
                  <li>
                  Provide leadership within engineering department through close collaboration,
                   knowledge shares, and mentorship</li>
                </ul>
              </div>
              

            </div>
              
          </div>
    </div>
  );
};

export default Experience;
import React, { useState, useEffect } from 'react';


const Intro = () => {

  return (
    <div className="Intro" id='intro'>
      <div className="IntroContent">
      <span id='begin'>
        Hello, my name is <br/><large>Austin Ogola</large> 
      </span><br/>
      <span>
        As a <bold>full-stack developer</bold>,I implement <bold> applications </bold> 
        and <bold>infrastacture</bold> that runs on the web.</span>
      <br/>
     
        <a href='#projects'><button>Checkout my work</button></a>
      </div>
      <div className="IntroSide">
          <div></div>
      </div>
        
    </div>
  );
};

export default Intro;
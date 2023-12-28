import React, { useState, useEffect } from 'react';


const Intro = () => {

  return (
    <div className="Intro">
      <div className="IntroContent">
        <small>Hello, my name is</small><h1>Austin Ogola</h1>
    
        <h2>Full - Stack Developer </h2>
        <h4>I specialize in implementing ideas that run on the web, and providing solutions to web related problems</h4>
     
        <a href='#projects'><button>Checkout my work</button></a>
      </div>
      <div className="IntroSide">
          <div></div>
      </div>
        
    </div>
  );
};

export default Intro;
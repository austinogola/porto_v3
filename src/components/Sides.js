import React from 'react';

import { BsGithub,BsLinkedin  } from "react-icons/bs";
import { AiFillGithub ,AiOutlineCodepen } from "react-icons/ai";
import { DiCodepen } from "react-icons/di";

const Sides = () => {
  return (
    <div className="SidesContainer">
      <div className="leftDivWrapper">
        <div className="leftDiv">
            <span><BsGithub size='22px'  /></span>
            <span><BsLinkedin size={'22px'} /></span>
            <span><AiOutlineCodepen size={'24px'} /></span>
            <span id="vl"></span>
        </div>
      </div>


      <div className="rightDivWrapper">
        <span id='emailText'>austinandogola@gmail.com</span>
        <span id="vl"></span>
      </div>
    </div>
  );
};

export default Sides;

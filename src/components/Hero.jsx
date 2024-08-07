import React from "react";
import Typed from "react-typed";
import { BsChevronDown } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import link from "../assets/Saniya_resume.pdf";
// import crypto from "../assets/crypto.png";
const Hero = () => {
  // const link = "../assets/ayush_resume_final.pdf";
  const cryptopng = crypto;
  const handleClick = () => {
    const a = document.createElement("a");
    a.href = link;
    a.setAttribute("download", "resume.pdf");
    document.body.appendChild(a);
    console.log(cryptopng);
    a.click();
    a.remove();
  };
  const strings = [
    "I'm Saniya,",
    "A Web3 Enthusiast,",
    "A Blockchain developer",
    "A AI/ML developer,",
    "And A Web developer,",
  ];
  return (
    <div
      id="home"
      className="-pt[30px] hero w-full   flexbox flex-col md:gap-10 gap-16  text-white"
    >
      <div className="heading">
        <h1 className="md:text-4xl text-xl">Welcome</h1>
      </div>
      <div className="anmated md:w-fit w-[80%] text-center md:mt-0 -mt-3 md:h-fit h-20 ">
        <Typed
          className="md:text-6xl  text-3xl text-[#ffc107] font-bold"
          strings={strings}
          typeSpeed={70}
          backSpeed={35}
          loop
        />
      </div>
      <div className="md:mt-0 -mt-4 subtext">
        <h3 className="md:text-2xl text-xl">based in India.</h3>
      </div>
      <div className="button">
        <button className="btn text-xl" onClick={handleClick}>
          Download CV
        </button>
      </div>
      <div className="icon">
        <Link to="about" spy={true} smooth={true} offset={-75} duration={500}>
          <BsChevronDown className="text-3xl bounce-out-down" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;

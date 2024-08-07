import React from "react";
import Heading from "./Heading";
import pfp from "../assets/Saniya_image.png";

import { Link, animateScroll as scroll } from "react-scroll";
const About = () => {
  return (
    <div
      id="about"
      className="-pt-[30px] w-full bg-[#212529] relative text-white screen flex flex-col justify-center items-center md:gap-5 gap-10"
    >
      <div className="heading absolute top-5">
      <Heading text="ABOUT ME" subtext="Know me better" />
      </div>
      <div className="text md:pl-16 mt-48  md:flex-row flex flex-col justify-center items-center md:gap-8 gap-14 md:mt-24 ">
        <div className="img flex justify-center items-center">
          <img src={pfp} alt="" className="rounded-full w-[250px]" />
        </div>

        <div className="md:w-[4px] w-[250px] bg-[#ffc107] md:h-[200px] h-[4px]"></div>
        <div className="right md:w-[45%] w-[80%] flex flex-col justify-center gap-7 md:items-start items-center">
          <h1 className="md:text-4xl text-2xl px-4 font-bold">
            Hi, I'm <span className="text-[#ffc107]">Saniya Ladanavar</span>
          </h1>
          <p className="md:text-[1.4rem] text-xl w-full text-justify px-4">
            I'm currently a student with a diverse skill set, including
            Web3 , Blockchain , Artificial Intelligence/Machine Learning and Web Development. 
          </p>
        </div>
      </div>
      <div className="bottom md:mb-5 mb-20">
        <Link to="contact" spy={true} smooth={true} offset={-75} duration={500}>
          <button className="btn text-xl">Hire Me</button>
        </Link>
      </div>
      {/* <div className="bottom">
        <div className="links-socials">
          <ul className="flex items-center justify-between gap-8">
            <li>
              <Link to="https://github.com/ayushtiwari134">
                <BsGithub size={40} />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/ayush-tiwari-ba10aa264">
                <BsLinkedin size={40} />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/_.aaayuxh_">
                <BsInstagram size={40} />
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default About;

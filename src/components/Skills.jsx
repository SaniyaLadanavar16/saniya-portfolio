import React from "react";
import Heading from "./Heading";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import hardhat from "../assets/hardhat.svg";
import chai from "../assets/chai.svg";
import metamask from "../assets/metamask.svg";
import ethers from "../assets/ethers.svg";
import ethereum from "../assets/ethereum.svg";
import solidity from "../assets/solidity.svg";
import vite from "../assets/vite.svg";
import materialui from "../assets/materialui.svg";
const Skills = () => {
  return (
    <div
      id="skills"
      className="flex w-full flex-col relative justify-center items-center text-white bg-[#343a40] pt-[-30px] screen py-5"
    >
      <div className="heading absolute top-5">
        <Heading text="TOOLS" subtext="What I know" />
      </div>
      <div className="skills flex md:flex-row flex-col items-center md:mt-10 mt-40 justify-center md:gap-14 gap-28">
        <div className="frontend flex flex-col justify-center items-center gap-8 w-[50%]">
          <h1 className="text-3xl">Frontend</h1>
          <div className="icons flexbox flex-wrap text-6xl gap-6">
            <i className="fa-brands fa-html5  text-[#ff0000]"></i>
            <i className="fa-brands fa-css3-alt  text-[#006eff]"></i>
            <i className="fa-brands fa-js-square  text-[#f0db4f]"></i>
            <i className="fa-brands fa-react text-[#61dbfb]"></i>
            <TbBrandNextjs className="text-[#000000]" />
            <i className="fa-brands fa-bootstrap text-[#563d7c]"></i>
            <i className="fa-brands fa-sass  text-[#c69]"></i>
            <i className="fa-brands fa-tailwind text-[#06b6d4]"></i>
            <div className="tailwind">
              <BiLogoTailwindCss className=" text-[#06b6d4]" />
            </div>
            <img src={vite} alt="vite" className="w-[50px]"/>
            <img src={materialui} alt="vite" className="w-[50px]"/>
          </div>
        </div>
        <div className=" md:w-[4px] w-[250px] md:mt-0 -mt-12 md:mb-0 mb-4 bg-[#ffc107] md:h-[300px] h-[4px]"></div>
        <div className="blockchain flex flex-col justify-center items-center gap-8 w-[50%]">
          <h1 className="text-3xl -mt-16">Blockchain</h1>
          <div className="icons flexbox flex-wrap md:mb-0 mb-6 gap-6">
            <img src={solidity} alt="solidity" className="w-[40px]" />
            <img src={hardhat} alt="hardhat" className="w-[70px]" />
            <img src={chai} alt="chai" className="w-[60px]" />
            <img src={metamask} alt="metamask" className="w-[60px]" />
            <img src={ethers} alt="ethers" className="w-[70px]" />
            <img src={ethereum} alt="ethereum" className="w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

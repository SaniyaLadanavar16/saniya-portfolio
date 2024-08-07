import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const height = window.innerHeight;
  return (
    <nav className="sticky bg-[#212529] text-white z-[200] flex items-center text-xl justify-between px-10 py-5 top-0 w-full">
      <div className="logo cursor-pointer">
        <Link to="home" spy={true} smooth={true} offset={-72} duration={500}>
          <p className="text-2xl font-bold text-[#ffc107]">AT</p>
        </Link>
      </div>

      <div className="ml-28 links md:flex hidden">
        <ul className="flex items-center justify-between font-semibold gap-10">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-height+ 72}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="links-socials md:block hidden">
        <ul className="flex items-center justify-between gap-3">
          <li>
            <a href="https://github.com/SaniyaLadanavar16" target="_blank">
              <BsGithub size={"25px"} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/-saniya/"
              target="_blank"
            >
              <BsLinkedin size={"25px"} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_saniya_16__/" target="_blank">
              <BsInstagram size={"25px"} />
            </a>
          </li>
        </ul>
      </div>
      {/* mobile menu */}

      <div
        onClick={() => {
          setShow(!show);
        }}
        className="hamburger absolute top-6 right-5 md:hidden cursor-pointer block"
      >
        {show ? (
          <AiOutlineClose size={"25px"} />
        ) : (
          <AiOutlineMenu size={"25px"} />
        )}
      </div>

      {show && (
        <div className="mobile absolute w-[70vw] ease-in-out duration-300 h-[50vh] p-10 top-14 bg-[#343a40] right-10 flex flex-col items-center gap-10 justify-center">
          <div className="logo cursor-pointer">
            <Link
              onClick={() => {
                setShow(!show);
              }}
              to="home"
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
            >
              <p className="text-2xl font-bold text-[#ffc107]">AT</p>
            </Link>
          </div>

          <div className="links">
            <ul className="flex flex-col items-center justify-center font-semibold gap-10">
              <li>
                <Link
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import sign from "../assets/sign.png"
import semantic from "../assets/semantic.png"
// import pfp from "../assets/myself-removebg-preview.png";

const Projects = () => {
  // const cryptoimage = crypto;
  const images = [portfolio, lottery, crypto, defi]
  const projects = [
    {
      name: "sign language",
      imageurl: "/sign.png",
      githuburl: "https://github.com/SaniyaLadanavar16/AI-Assistant-converting-sign-language-into-text",
      deploymenturl: "/",
    },
    {
      name: "Semantic Engine",
      // imageurl: "../assets/semantic.png",
      githuburl: "/",
      deploymenturl: "/",
    },
    
  ];
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center relative w-full  z-0  bg-[#212529] text-white"
    >
      <div className="heading absolute top-5">
        <Heading text="PORTFOLIO" subtext="My Work" />
      </div>
      <div className="grid pt-60 mb-20 md:grid-cols-2 grid-cols-1 md:gap-x-20 md:gap-y-10 gap-y-14">
        {projects.map((item, i) => (
          <Card
            key={i}
            text={item.name}
            imageUrl={images[i]}
            githubUrl={item.githuburl}
            deploymentUrl={item.deploymenturl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

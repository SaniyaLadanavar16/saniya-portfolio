import React from "react";

const Heading = ({ text, subtext }) => {
  return (
    <div className="heading relative flex justify-center items-center">
      <h1 className="md:text-9xl text-[4.4rem] opacity-[0.08] font-bold">{text}</h1>
      <div className="subheading absolute w-[20%] md:bottom-8 bottom-9  h-1 bg-[#ffc107]"></div>
      <div className="subheading absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 font-bold md:text-4xl text-2xl w-full text-center">
        <p>{subtext}</p>
      </div>
    </div>
  );
};

export default Heading;

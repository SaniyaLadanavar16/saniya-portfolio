import "../index.css"; // Importing CSS file
import "./card.css"; // Create a separate CSS file for styling
import bg1 from "../assets/portfolioss.png";
import { Link } from "react-router-dom";
// import crypto from "../assets/crypto.png";
const ProjectCard = ({ text, imageUrl, githubUrl, deploymentUrl }) => {
  // const img = imageUrl
  return (
    <div className="carddiv rounded-md">
      <div className="card md:w-[450px] md:h-[300px] w-[90vw] h-[300px] rounded-lg">
        {/* <h1 className="absolute transform z-[4] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 font-bold text-4xl w-full text-center text-white">
          {text}
        </h1> */}
        {console.log(imageUrl)}
        <img src={imageUrl} alt="image" className="image" />
        <div className="body flex flex-col justify-center gap-8 items-center">
          <h1 className="text-2xl font-bold">{text}</h1>
          <a href={githubUrl} target="_blank">
            <button className="btn">Code</button>
          </a>
          <a href={deploymentUrl}>
            <button className="btn">Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

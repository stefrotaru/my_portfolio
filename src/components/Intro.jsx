/* eslint-disable react/prop-types */
// import React from "react";

import { ReactComponent as Arrow } from "../assets/arrow-down-svgrepo-com.svg";
import Typewriter from "react-ts-typewriter";

function Intro(props) {
  const theme = props.theme;

  const arrowColor = () => {
    if (theme === "dark") {
      return "#fdba74";
    } else {
      return "#c4b5fd";
    }
  };

  const scrollDown = () => {
    console.log()
    document.querySelector(".about-section").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="intro-section min-h-screen flex items-center justify-center flex-col gap-20 text-center pt-44 pb-6">
      <div className="intro-text flex flex-col place-content-center">
        <h1 className="title text-4xl md:text-7xl dark:text-zinc-300 mb-1 md:mb-3 font-bold hide">
          Hey, I&apos;m Stefan
        </h1>

        <p className="title animate-titleLtoR bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl md:text-4xl font-black mb-8 mt-8 md:mb-12 md:mt-12 hide">
          Front End Developer
        </p>

        {/* <p className="text-md md:text-xl max-w-xl mb-6 font-bold hide">
        I strive to create modern user interfaces through hard work, endless curiosity and continuous learning. Let&apos;s shape the future of UI together. Explore my work and experience exceptional user experiences.
        </p> */}

        <p className="text-md md:text-xl max-w-xl mb-6 font-bold h-20">
          <Typewriter text="I strive to create modern user interfaces through hard work, endless curiosity and continuous learning." cursor={false} />
        </p>
        
      </div>
      <ul className="scroll-down-ul cursor-pointer ma-10" onClick={scrollDown}>
        <li>
          <Arrow fill={arrowColor()} className="imgm1 h-8 md:h-12 " />
        </li>
        <li>
          <Arrow fill={arrowColor()} className="imgm2 h-8 md:h-12 " />
        </li>
        <li>
          <Arrow fill={arrowColor()} className="imgm3 h-8 md:h-12 " />
        </li>
      </ul>
    </div>
  );
}

export default Intro;

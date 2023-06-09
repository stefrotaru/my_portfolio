/* eslint-disable react/prop-types */
// import React from "react";

import { ReactComponent as Arrow } from "../assets/arrow-down-svgrepo-com.svg";

function Intro(props) {
  const theme = props.theme;

  const arrowCol = () => {
    if (theme === "dark") {
      return "#fdba74";
    } else {
      return "#c4b5fd";
    }
  };

  return (
    <div className="intro-section min-h-screen flex items-center justify-center flex-col text-center pt-44 pb-6">
      <div className="intro-text flex flex-col place-content-center">
        <h1 className="text-4xl md:text-7xl dark:text-zinc-300 mb-1 md:mb-3 font-bold hide">
          Hey, I&apos;m Stefan
        </h1>

        <p className="animate-titleLtoR bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl md:text-4xl font-black mb-8 mt-8 md:mb-12 md:mt-12 hide">
          Front End Developer
        </p>

        <p className="text-md md:text-xl max-w-xl mb-6 font-bold hide">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          nemo pariatur dolorum! Provident perferendis, id corrupti earum
          voluptate quaerat, debitis consectetur!
        </p>
        {/* <a
          href=""
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          More about me
        </a> */}
      </div>
      <ul className="scroll-down-ul">
        <li>
          <Arrow fill={arrowCol()} className="imgm1 h-8 md:h-12 " />
        </li>
        <li>
          <Arrow fill={arrowCol()} className="imgm2 h-8 md:h-12 " />
        </li>
        <li>
          <Arrow fill={arrowCol()} className="imgm3 h-8 md:h-12 " />
        </li>
      </ul>
    </div>
  );
}

export default Intro;

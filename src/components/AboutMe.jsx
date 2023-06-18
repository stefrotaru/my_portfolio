/* eslint-disable react/prop-types */

import Title from "./Title";
import data from "../data/aboutMe";

function AboutMe() {
  return (
    <div className="flex flex-col justify-center my-20">
      <Title>About me</Title>
      <div className="hide">
        {/* <div className="h-auto w-auto"> */}
        <img
          src={data.img}
          alt="portrait"
          className="w-3/12 h-auto rounded-full float-left mr-5 mb-2"
        />
        {/* </div>
                <div className="pl-6"> */}
        <p className="text-base font-normal text-stone-500 dark:text-zinc-400">
          {data.text}
        </p>
        <div className="flex items-center">
            <p>Check out my</p>
            <a
            href="src/assets/CV_SR_2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600 dark:from-orange-300 dark:to-red-500 pl-1"
            >
            RESUME
            </a>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default AboutMe;

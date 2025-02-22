/* eslint-disable react/prop-types */

import Title from "./Title";
import data from "../data/aboutMe";

function AboutMe() {
  return (
    <div className="about-section flex flex-col justify-center my-32 hide">
      <Title>About me</Title>
      <div className="hide md:grid md:grid-cols-3 md:gap-5">
        <img
          src={data.img}
          alt="portrait"
          className="h-44 md:h-auto rounded-full float-left mr-5 mb-2 col-span-1"
        />
        <div className="col-span-2 text-xs md:text-base">
          <p className="font-normal text-stone-500 dark:text-zinc-400 text-justify">
            {data.text_part_1}
          </p>
          <p className="font-normal text-stone-500 dark:text-zinc-400 py-3 text-justify">
            {data.text_part_2}
          </p>
          <p className="font-normal text-stone-500 dark:text-zinc-400 py-3 text-justify">
            {data.text_part_3}
          </p>
          <div className="flex items-center">
            <p className="text-stone-500 dark:text-zinc-400">
              Check out my
              <a
                href={data.cv}
                aria-label="resume"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600 dark:from-orange-300 dark:to-red-500 ml-1"
              >
                RESUME
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

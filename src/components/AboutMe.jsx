/* eslint-disable react/prop-types */

import Title from "./Title";
import data from "../data/aboutMe";

function AboutMe() {
  return (
    <div className="flex flex-col justify-center my-32">
      <Title>About me</Title>
      <div className="hide grid grid-cols-3 gap-5">
        <img
          src={data.img}
          alt="portrait"
          className="h-auto rounded-full float-left mr-5 mb-2 col-span-1"
        />
        <div className="col-span-2">
          <p className="text-base font-normal text-stone-500 dark:text-zinc-400">
            {data.text_part_1}
          </p>
          <p className="text-base font-normal text-stone-500 dark:text-zinc-400 py-3">
            {data.text_part_2}
          </p>
          <p className="text-base font-normal text-stone-500 dark:text-zinc-400 py-3">
            {data.text_part_3}
          </p>
          <div className="flex items-center">
            <p className="text-stone-500 dark:text-zinc-400">Check out my</p>
            <a
              href="src/assets/CV_SR_2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600 dark:from-orange-300 dark:to-red-500 pl-1"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

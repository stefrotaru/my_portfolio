/* eslint-disable react/prop-types */

import Title from "./Title";
import data from "../data/aboutMe";

function AboutMe() {
    return (
        <div className="flex flex-col justify-center my-20 ">
            <Title>About me</Title>
            <div className="">
                {/* <div className="h-auto w-auto"> */}
                    <img src={data.img} alt="portrait" className="w-4/12 h-auto rounded-full float-left mr-5 mb-2" />
                {/* </div>
                <div className="pl-6"> */}
                    <p className="text-base font-normal text-stone-500 dark:text-zinc-400">{data.text}</p>
                {/* </div> */}
            </div>
        </div>
    )
  }
  
  export default AboutMe;
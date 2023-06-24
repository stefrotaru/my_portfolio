/* eslint-disable react/prop-types */

// import Typewriter from "react-ts-typewriter";

function Title({ children, id }) {
  return (
    // <div className="text-2xl md:text-3xl font-bold  decoration-4 mb-5 text-stone-900 dark:text-zinc-300  text-center py-5">
    //   <Typewriter text={children} cursor={false}/>

    // </div>

    <h1
      id={id && id}
      className="title text-2xl md:text-3xl font-bold mb-8 text-stone-900 dark:text-zinc-300 hide text-center py-5"
    >
      {children}
    </h1>
  );
}

export default Title;

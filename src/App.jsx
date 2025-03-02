import { useState, useEffect, useRef } from "react";

import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import ToolsStack from "./components/ToolsStack";
import AboutMe from "./components/AboutMe";

import {ReactComponent as DecorationCommentStart} from "./assets/code-svgrepo-com.svg";
import {ReactComponent as DecorationCommentEnd} from "./assets/code-slash-svgrepo-com.svg";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      // else {
      //   entry.target.classList.remove('show');
      // }
  })
})

function App() {
  const [theme, setTheme] = useState(null);
  const ref = useRef();

  // dark-light theme handlers
  useEffect(() => {
    if (sessionStorage.getItem("last-theme")) {
      setTheme(sessionStorage.getItem("last-theme"));
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    sessionStorage.setItem("last-theme", theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add(theme);
      document.querySelector("body").classList.add("dark");

      document.documentElement.classList.remove("light");
      document.querySelector("body").classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.querySelector("body").classList.add("light");

      document.documentElement.classList.remove("dark");
      document.querySelector("body").classList.remove("dark");
    }
  }, [theme]);

  // intersection observers
  useEffect(() => {
    const hiddenElements = ref.current.querySelectorAll('.hide');
    hiddenElements.forEach((el) => observer.observe(el));
  }, [ref, theme])

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  const decorativeCommentColor = () => {
    if (theme === "dark") {
      return "#fdba74";
    } else {
      return "#c4b5fd";
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label="theme switcher"
        onClick={handleThemeSwitch}
        className="absolute p-[0.225rem] md:p-2 right-5 md:right-8 top-6 md:top-7 z-10 bg-violet-300 rounded-md dark:bg-orange-300 transition-colors duration-700 ease-in-out"
      >
        {theme === "dark" ? sun : moon}
      </button>
      <div className="relative bg-white dark:bg-stone-900 transition-colors duration-700 ease-in-out text-stone-900 dark:text-stone-300 min-h-screen">
        <div ref={ref} className="max-w-5xl w-10/12 mx-auto ">
          <Intro theme={theme}/>
          <ToolsStack/>
          <AboutMe />
          <Portfolio />
          <Timeline />
          <Contact />
          <Socials />
          <Footer />
          <DecorationCommentStart fill={decorativeCommentColor()} className="absolute h-10 md:h-16 top-4 left-4"/>
          <DecorationCommentEnd fill={decorativeCommentColor()} className="absolute h-10 md:h-16 bottom-4 right-4"/>
        </div>
      </div>
    </>
  );
}

export default App;


// dark   bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
//        bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-black to-slate-900


// light  bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200
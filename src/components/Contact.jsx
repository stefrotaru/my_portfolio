// import React from 'react';

import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto hide">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="flex self-center text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-zinc-100 bg-gradient-to-r from-violet-400 to-indigo-600 dark:from-orange-300 dark:to-red-500 shadow-lg hover:shadow-indigo-500/60 dark:hover:shadow-orange-500/60 transition-colors duration-700 ease-in-out"
          >
            Hire me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
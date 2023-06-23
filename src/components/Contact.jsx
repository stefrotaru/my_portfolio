import { useState } from 'react';

import Title from "./Title";

function Contact() {
  const [senderName, setSenderName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [senderMessage, setSenderMessage] = useState('')

  const nameInputHandler = (e) => setSenderName(e.target.value)
  
  const emailInputHandler = (e) => setSenderEmail(e.target.value)

  const messageInputHandler = (e) => setSenderMessage(e.target.value)

  const resetFormHandler = () => {
    setTimeout(() => {
      setSenderName('')
      setSenderEmail('')
      setSenderMessage('')
    }, 1000)
  }

  return (
    <div className="flex flex-col mb-10 mx-auto hide">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/0cb81842-ffc9-48d9-8b72-f71367b5c793"
          method="POST"
          id="contact_form"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={senderName}
            onChange={nameInputHandler}
            className="p-2 bg-transparent border-2 dark:border-zinc-500 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={senderEmail}
            onChange={emailInputHandler}
            className="my-2 p-2 bg-transparent border-2 dark:border-zinc-500 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            value={senderMessage}
            onChange={messageInputHandler}
            className="p-2 mb-4 bg-transparent border-2 dark:border-zinc-500 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            onClick={resetFormHandler}
            className="flex self-center text-center px-8 py-3 w-max text-base font-medium rounded-md text-zinc-100 bg-gradient-to-r from-violet-400 to-indigo-600 dark:from-orange-300 dark:to-red-500 shadow-lg hover:shadow-indigo-500/60 dark:hover:shadow-orange-500/60 transition-colors duration-700 ease-in-out"
          >
            Hire me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
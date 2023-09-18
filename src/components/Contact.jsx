import { useState } from "react";

import Title from "./Title";

function Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const nameInputHandler = (e) => setSenderName(e.target.value);

  const emailInputHandler = (e) => setSenderEmail(e.target.value);

  const messageInputHandler = (e) => setSenderMessage(e.target.value);

  const isFormFilledOut = () => {
    if (senderName === "" || senderEmail === "" || senderMessage === "") {
      return false;
    } else {
      return true;
    }
  };

  const isEmailValid = () => {
    if (senderEmail.includes("@") && senderEmail.includes(".")) {
      return true;
    } else {
      return false;
    }
  };

  const isFormValid = () => {
    if (isFormFilledOut() && isEmailValid()) {
      return true;
    } else {
      return false;
    }
  };

  // send form
  const sendFormHandler = (e) => {
    e.preventDefault();

    const inputFields = document.querySelectorAll("input, textarea");
    const emailField = document.querySelector('input[name="email"]');
    const submitButton = document.querySelector('button[type="submit"]');

    if (!isFormValid()) {
      console.log("form not valid");

      inputFields.forEach((input) => {
        if (input.value === "") {
          input.classList.add("!border-red-500");
          input.classList.add("shake");

          setTimeout(() => {
            input.classList.remove("shake");
          }, 500);
        } else {
          input.classList.remove("!border-red-500");
          input.classList.remove("shake");
        }
      });

      if (!isEmailValid()) {
        emailField.classList.add("!border-red-500");
        emailField.classList.add("shake");

        setTimeout(() => {
          emailField.classList.remove("shake");
        }, 500);
      }

      return;
    }

    fetch("https://getform.io/f/0cb81842-ffc9-48d9-8b72-f71367b5c793", {
      method: "POST",
      body: JSON.stringify({ senderName, senderEmail, senderMessage }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("form sent");
          resetFormHandler();

          // make sure we remove the red border from the input fields
          inputFields.forEach((input) => {
            input.classList.remove("!border-red-500");
          });

          submitButton.classList.remove(
            "from-violet-400",
            "to-indigo-600",
            "dark:from-orange-300",
            "dark:to-red-500",
            "hover:shadow-indigo-500/60",
            "dark:hover:shadow-orange-500/60"
          );
          submitButton.classList.add(
            "dark:from-green-400",
            "dark:to-green-700"
          );
          submitButton.textContent = "Message sent";

          setTimeout(() => {
            submitButton.classList.remove(
              "dark:from-green-400",
              "dark:to-green-700"
            );
            submitButton.classList.add(
              "from-violet-400",
              "to-indigo-600",
              "dark:from-orange-300",
              "dark:to-red-500",
              "hover:shadow-indigo-500/60",
              "dark:hover:shadow-orange-500/60"
            );
            submitButton.textContent = "Get in touch";
          }, 2000);
        }
      })
      .catch((err) => console.log(err));
  };

  const addRedBorderIfInvalid = (e) => {
    if (e.target.value === "") {
      e.target.classList.add("!border-red-500");
    }
  };

  const removeRedBorderIfFilledOut = (e) => {
    if (e.target.value !== "") {
      e.target.classList.remove("!border-red-500");
    }
  };

  const resetFormHandler = () => {
    setSenderName("");
    setSenderEmail("");
    setSenderMessage("");
  };

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
            onBlur={removeRedBorderIfFilledOut}
            className="p-2 bg-transparent border-2 dark:border-zinc-500 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={senderEmail}
            onChange={emailInputHandler}
            onBlur={
              isEmailValid ? removeRedBorderIfFilledOut : addRedBorderIfInvalid
            }
            className="my-2 p-2 bg-transparent border-2 dark:border-zinc-500 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            value={senderMessage}
            onChange={messageInputHandler}
            onBlur={removeRedBorderIfFilledOut}
            className="p-2 mb-4 bg-transparent border-2 dark:border-zinc-500 rounded-md focus:outline-none resize-none"
          />
          <button
            type="submit"
            onClick={sendFormHandler}
            className="flex self-center place-content-center py-3 min-w-[50%] sm:min-w-[40%] md:min-w-[30%]  text-base font-medium rounded-md text-zinc-100 bg-gradient-to-r from-violet-400 to-indigo-600 dark:from-orange-300 dark:to-red-500 shadow-lg hover:shadow-indigo-500/60 dark:hover:shadow-orange-500/60 transition-colors duration-700 ease-in-out hide"
          >
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

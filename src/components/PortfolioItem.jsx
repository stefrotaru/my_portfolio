/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

function PortfolioItem({
  title,
  imgUrl,
  stack,
  link,
  shortDescription,
  longDescription,
  repo,
  index,
}) {
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && modalRef.current) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  });

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    itemRef.current.style.setProperty("--x", `${x}px`);
    itemRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseEnter = () => {
    if (!itemRef.current) return;
    itemRef.current.classList.add("glow-active");
  };

  const handleMouseLeave = () => {
    if (!itemRef.current) return;
    itemRef.current.classList.remove("glow-active");
  };

  const openModal = () => {
    const modal = modalRef.current;
    buttonRef.current.blur(); // remove focus from button

    modal.classList.remove("modal-closing");
    modal.classList.add("modal-opening");

    modal.showModal();

    modal.addEventListener("click", handleBackdropClick);
  };

  const closeModal = () => {
    const modal = modalRef.current;

    modal.classList.remove("modal-opening");
    modal.classList.add("modal-closing");

    setTimeout(() => {
      modal.close();
      modal.removeEventListener("click", handleBackdropClick);
    }, 300);
  };

  const handleBackdropClick = (e) => {
    const modal = modalRef.current;
    if (e.target === modal) {
      closeModal();
    }
  };

  return (
    <div className="portfolio-item-wrapper grid drop-shadow-lg dark:drop-shadow-lg ">
      <div
        ref={itemRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex flex-col min-h-[450px] border-2 dark:border-zinc-500 rounded-md overflow-hidden portfolio-item hide FeatureCard relative bg-gradient-to-br from-gray-200 to-gray-100 dark:from-zinc-800 dark:to-zinc-900 p-3 font-display shadow-sm before:absolute before:inset-0 before:content-[''] before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none glow-effect ${
          index % 2 === 0 ? "slide-in" : "slide-in-right"
        } delay-${index}`}
        style={{
          "--x": "0px",
          "--y": "0px"
        }}
      >
        {imgUrl !== "" ? (
          <div>
            <a
              href={link}
              aria-label={title + " repo"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgUrl}
                alt="portfolio-img"
                className="w-full h-auto object-cover cursor-pointer"
              />
            </a>
          </div>
        ) : (
          ""
        )}
        <div
          className={
            imgUrl !== ""
              ? "w-full p-4 h-full flex flex-col"
              : "w-full p-4 h-full flex flex-col justify-center text-center"
          }
        >
          <p className="text-lg md:text-xl dark:text-zinc-300 mb-2 md:mb-3 font-semibold">
            {title}
          </p>
          <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-zinc-300">
            {stack.map((item) => (
              <span
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-300 dark:border-zinc-600 rounded-md"
                key={Math.random()}
              >
                {item}
              </span>
            ))}
          </div>

          {shortDescription !== "" && (
            <div className="description flex-grow">
              <p className="pt-2">{shortDescription}</p>

              {longDescription !== "" && (
                <button
                  onClick={openModal}
                  ref={buttonRef}
                  className="cursor-pointer underline flex flex-start mt-2 hover:text-violet-300 dark:hover:text-orange-300"
                >
                  Read more
                </button>
              )}
            </div>
          )}

          {longDescription !== "" && (
            <div>
              <dialog
                ref={modalRef}
                className="modal sm:text-lg w-11/12 sm:w-9/12 lg:w-6/12 2xl:w-4/12 p-5 rounded-md bg-gradient-to-br from-gray-200 to-gray-100 dark:from-zinc-800 dark:to-zinc-900 transition-colors duration-700 ease-in-out text-stone-900 dark:text-stone-300 backdrop:bg-black backdrop:bg-opacity-50 "
                style={{
                  transform: "scale(0.9)",
                  opacity: 0,
                  transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
                }}
              >
                <button
                  onClick={closeModal}
                  className="focus:outline-none border-2 border-violet-300 dark:border-orange-300 rounded-md p-1 absolute right-5 hover:bg-violet-300 hover:dark:bg-orange-300 text-sm hover:text-white dark:hover:text-black"
                >
                  esc
                </button>
                <div className="flex flex-col gap-4 break-words">
                  <h1 className="text-xl font-bold pb-2 pt-1 w-4/5">
                    {longDescription.title}
                  </h1>
                  {longDescription.content.map((line, i) => {
                    if (typeof line === "string") {
                      return <p key={i}>{line}</p>;
                    } else if (typeof line === "object") {
                      return (
                        <ul key={i} className="pl-6">
                          {line.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </dialog>
            </div>
          )}

          <div className="mt-4">
            <a
              href={repo !== "" ? repo : link}
              aria-label={
                repo !== "" ? title + " repository" : "Github profile"
              }
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-violet-300 dark:hover:text-orange-300"
            >
              {repo !== ""
                ? "Github Repository"
                : "Check out my Github profile!"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;

/* eslint-disable react/prop-types */
import { useRef } from 'react';

function PortfolioItem({ title, imgUrl, stack, link, shortDescription, longDescription, repo }) {
  const buttonRef = useRef(null);

  const openModal = () => {
    const modal = document.getElementById(title.replace(/\s/g, "-").toLowerCase() + '-modal');
    buttonRef.current.blur(); // remove focus from button
    modal.showModal();
  }
  const closeModal = () => {
    const modal = document.getElementById(title.replace(/\s/g, "-").toLowerCase() + '-modal');
    modal.close();
  }

  return (
    <div className="portfolio-item-wrapper grid drop-shadow-lg dark:drop-shadow-lg">
      <div
        id="appear-l-r"
        className="flex flex-col min-h-[450px] border-2 dark:border-zinc-500 rounded-md overflow-hidden portfolio-item hide "
      >
        <div>
          <a href={link} target="_blank" rel="noreferrer">
            {imgUrl !== '' ? <img
              src={imgUrl}
              alt="portfolio-img"
              className="w-full h-auto object-cover cursor-pointer"
            /> : ''}
          </a>
        </div>
        <div className={imgUrl !== '' ? "w-full p-4 h-full flex flex-col" : 'w-full p-4 h-full flex flex-col justify-center text-center'}>
          <h3 className="text-lg md:text-xl dark:text-zinc-300 mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
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

          { shortDescription !== '' && <p className="py-2 flex-grow">
                                          {shortDescription}
                                          {longDescription !== '' && <button onClick={openModal} ref={buttonRef} className="cursor-pointer underline ml-2">Read more!</button>}
                                       </p>
          }
          
          {longDescription !== '' && 
            <div>
              <dialog className="modal sm:text-lg w-11/12 sm:w-9/12 lg:w-6/12 2xl:w-4/12 p-5 rounded-md bg-stone-100 dark:bg-stone-200 shadow-lg outline-none" id={title.replace(/\s/g, "-").toLowerCase() + '-modal'}>
                <button onClick={closeModal} className="focus:outline-none border-2 border-violet-300 dark:border-orange-300 rounded-md p-1 absolute right-5 hover:bg-violet-300 hover:dark:bg-orange-300 text-sm">esc</button>
                <div className="flex flex-col gap-4 break-words">
                  <h1 className="text-xl font-bold pb-2 pt-1 w-4/5">{longDescription.title}</h1>
                  {longDescription.content.map((line, i) => {
                    if (typeof line === 'string') {
                      return <p key={i}>{line}</p>
                    } else if (typeof line === 'object') {
                      return <ul key={i} className="pl-6">
                              {line.map((item, j) => <li key={j}>{item}</li>)}
                             </ul>
                    } else {
                      return;
                    }
                  })}
                </div>
              </dialog>
            </div>
          }

          <div className="mt-4">
            <a
              href={repo !== '' ? repo : link}
              aria-label={ title + " repository" }
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {repo !== '' ? 'Github Repository' : 'Check out my Github profile!'}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;

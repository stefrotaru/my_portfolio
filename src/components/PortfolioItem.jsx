/* eslint-disable react/prop-types */
// import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link, shortDescription, longDescription, repo }) {
  const openModal = () => {
    const modal = document.getElementById(title.replace(/\s/g, "-").toLowerCase() + '-modal');
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
                                          {longDescription !== '' && <span onClick={openModal} className="cursor-pointer underline ml-2">Read more!</span>}
                                       </p>
          }
          
          {longDescription !== '' && 
            <div>
              <dialog className="modal sm:text-lg w-11/12 sm:w-9/12 md:lg:w-6/12 p-5 rounded-md bg-stone-100 dark:bg-stone-200 shadow-lg outline-none" onClick={closeModal} id={title.replace(/\s/g, "-").toLowerCase() + '-modal'}>
                <div dangerouslySetInnerHTML={{__html: longDescription}} className="flex flex-col gap-2"></div>
              </dialog>
            </div>
          }

          <a
            href={repo !== '' ? repo : link}
            aria-label={ title + " repository" }
            target="_blank"
            rel="noreferrer"
            className="underline mt-4"
          >
            {repo !== '' ? 'Github Repository' : 'Check out my Github profile!'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;

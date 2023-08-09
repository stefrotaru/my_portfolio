/* eslint-disable react/prop-types */
// import React from 'react';

import PortfolioItemModal from "./PortfolioItemModal";
import NiceModal from "@ebay/nice-modal-react";

function PortfolioItem({
  title,
  imgUrl,
  stack,
  link,
  shortDescription,
  longDescription,
}) {
  const showPortfolioItemModal = () => {
    NiceModal.show(PortfolioItemModal, { title, longDescription });
  };

  return (
    <div className="portfolio-item-wrapper grid drop-shadow-lg dark:drop-shadow-lg">
      <div
        id="appear-l-r"
        className="flex flex-col justify-between border-2 dark:border-zinc-500 rounded-md overflow-hidden portfolio-item hide"
      >
        <div>
          <div className="">
            <a href={link} target="_blank" rel="noreferrer">
              <img
                src={imgUrl}
                alt="portfolio-img"
                className="w-full h-auto object-cover cursor-pointer"
              />
            </a>
          </div>
          <div className="w-full p-4">
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
            <p className="py-2">{shortDescription}</p>
          </div>
        </div>
        <button
          className="self-center border-2 border-none mb-4"
          onClick={showPortfolioItemModal}
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default PortfolioItem;

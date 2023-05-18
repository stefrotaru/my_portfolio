/* eslint-disable react/prop-types */
// import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link, shortDescription }) {
  return (
    <div
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden portfolio-item hide"
    >
      <a href={link}>
        <img
          src={imgUrl}
          alt="portfolio-img"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
      </a>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-zinc-300 mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-zinc-300">
          {stack.map((item) => (
            <span
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
              key={Math.random()}
            >
              {item}
            </span>
          ))}
          <p>{ shortDescription }</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;

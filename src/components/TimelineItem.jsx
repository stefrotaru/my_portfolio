/* eslint-disable react/prop-types */

function TimelineItem({year, title, company, duration, details, detailsList}) {
  // @TODO: calculate work time and display it in the timeline item
  // const calculateWorkTime = (start, end) => {
  //   const startDate = new Date(start);
  //   let endDate = new Date(end);

  //   if (end === 'Present') {
  //     endDate = new Date();
  //   }

  //   const diff = Math.floor(startDate.getTime() - endDate.getTime());
  //   const day = 1000 * 60 * 60 * 24;

  //   let days = Math.abs(Math.floor(diff/day));
  //   let months = Math.abs(Math.floor(days/31)) +1; // add 1 to months to account for 0 indexing

  //   if (months > 12) {
  //     const years = Math.floor(months/12);
  //     months = (months % 12) + 1;
      
  //     console.log(`I have occupied the ${title} position at ${company} for ${years} ${years === 1 ? 'year' : 'years'} and ${months} months${end === 'Present' ? ', and still counting! 💪' : '.'}`)
  //     // return `${years} ${years === 1 ? 'year' : 'years'}, ${months} months`;
  //   } else {
  //     console.log(`I have occupied the ${title} position at ${company} for ${months} months.`)
  //     // return months + " months";
  //   }

  //   return
  // }
  // calculateWorkTime(duration.start, duration.end);

  return (
    <li className="flex flex-col md:flex-row relative border-1 border-stone-200 dark:border-stone-700 timeline-item hide slide-in">
      <div className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5  -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-zinc-300 dark:text-stone-900 dark:bg-white bg-stone-900 rounded-md">
            {year}
          </span>
          <p className="text-lg font-semibold text-stone-900 dark:text-zinc-300">
            {title}
          </p>
          <span className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-zinc-500">
            {duration.start} - {duration.end}
          </span>
        </div>
        <p className="my-2 text-base font-normal text-stone-500 dark:text-zinc-400">
          <strong>Company:</strong> {company}
        </p>
        <p className="my-2 text-base font-normal text-stone-500 dark:text-zinc-400">
          <strong>Responsabilities:</strong> {details}
        </p>
        <ul className="timeline_list list-[disclosure-closed] list-inside">
          {detailsList &&
            detailsList.map((line, i) => (
              <li
                key={i}
                className="my-2 text-sm first-letter: font-normal text-stone-500 dark:text-zinc-400"
              >
                {line}
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
}

export default TimelineItem;

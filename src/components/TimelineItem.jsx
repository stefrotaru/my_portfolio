/* eslint-disable react/prop-types */

function TimelineItem({
  year,
  title,
  company,
  duration,
  details,
  detailsList,
}) {
  const calculateWorkTime = (start, end) => {
    const startDate = new Date(start);
    let endDate = new Date(end);
    let years = 0;
    let months = 0;

    if (end === "Present") {
      endDate = new Date();
    }

    const diff = Math.floor(startDate.getTime() - endDate.getTime());
    const day = 1000 * 60 * 60 * 24;
    const dayOfTheMonth = endDate.getDate();
    const days = Math.abs(Math.floor(diff / day));
    
    if (dayOfTheMonth <= 15 && end === "Present") {
      months = Math.abs(Math.floor(days / 31));
    } else {
      months = Math.abs(Math.floor(days / 31)) + 1; // add 1 to months to account for 0 indexing
    }

    if (months > 12) {
      years = Math.floor(months / 12);
      months = (months % 12) + 1;

      return `${years} ${years === 1 ? "year" : "years"}, ${months} months`;
    } else {
      if (end === "Present") {
        return months + " months & counting";
      }
      return months + " months";
    }
  };

  return (
    <li className="flex flex-col md:flex-row relative border-1 border-stone-200 dark:border-stone-700 timeline-item hide slide-in">
      <div className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-2 max-lg:mt-2 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-zinc-300 dark:text-stone-900 dark:bg-zinc-300 bg-stone-900 rounded-md">
            {year}
          </span>
          <p className="text-lg font-semibold text-stone-900 dark:text-zinc-300">
            {title}
          </p>
          <span className="max-lg:w-full text-sm font-normal leading-none text-stone-400 dark:text-zinc-500">
            <span>
              {duration.start} - {duration.end}
            </span>
            <div className="text-xs text-stone-400 dark:text-zinc-100">
              {calculateWorkTime(duration.start, duration.end)}
            </div>
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

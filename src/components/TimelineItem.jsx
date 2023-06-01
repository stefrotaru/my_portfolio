/* eslint-disable react/prop-types */

function TimelineItem({ year, title, duration, details }) {
    return (
        <ol className="flex flex-col md:flex-row relative border-1 border-stone-200 dark:border-stone-700 timeline-item hide slide-in">
            <div className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5  -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700"/>
                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-zinc-300 dark:text-stone-900 dark:bg-white bg-stone-900 rounded-md">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-zinc-300">
                        {title}
                    </h3>
                    <span className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-zinc-500">
                        {duration}
                    </span>
                </div>
                <p className="my-2 text-base font-normal text-stone-500 dark:text-zinc-400">
                    {details}
                </p>
            </div>
        </ol>
    )
}

export default TimelineItem;
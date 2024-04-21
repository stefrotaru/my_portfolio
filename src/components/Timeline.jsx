// import React from 'react';
import timeline from "../data/timeline";
import Title from "./Title";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-32">
      <ol className="w-full md:w-7/12">
        <li>
          <Title>Experience</Title>
        </li>
        {timeline.map((item) => (
          <TimelineItem
            key={Math.random()}
            year={item.year}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
            detailsList={item.detailsList}
          />
        ))}
      </ol>
    </div>
  );
}

export default Timeline;

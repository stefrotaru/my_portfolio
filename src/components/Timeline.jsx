// import React from 'react';
import timeline from "../data/timeline";
import Title from "./Title";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-32">
      <div className="w-full md:w-7/12">
        <Title>Experience</Title>
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
      </div>
    </div>
  );
}

export default Timeline;

import React from "react";
import Timeline from "../components/Timeline";

const TimelineRunner = () => {
  const events = [
    {
      date: "Jan",
      title: "Event 1",
      description: "Description for Event 1",
    },
    {
      date: "Feb",
      title: "Event 2",
      description: "Description for Event 2",
    },
    {
      date: "May",
      title: "Event 3",
      description: "Description for Event 3",
    },
    // Add more events here
  ];

  return (
    <div className="mt-4 mb-4">
      <h1>Timeline Example</h1>
      <Timeline events={events} />
      <hr className="mt-5" />
    </div>
  );
};

export default TimelineRunner;

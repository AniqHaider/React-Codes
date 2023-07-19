import React from "react";

const Timeline = ({ events }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="relative">
        <div
          className="border-r-2 border-gray-500 absolute h-full top-0"
          style={{ left: "15px" }}
        ></div>
        {events.map((event, index) => (
          <div key={index} className="relative flex items-start mb-8">
            <div className="bg-gray-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
              <span className="text-sm">{event.date}</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

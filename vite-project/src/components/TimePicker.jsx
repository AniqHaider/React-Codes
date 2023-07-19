import React from "react";
import { useState } from "react";

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="time"
        id="timepicker"
        className="block w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={selectedTime}
        onChange={handleTimeChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG path for clock icon */}
        </svg>
      </div>
    </div>
  );
};

export default TimePicker;

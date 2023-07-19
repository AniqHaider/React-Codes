import React from "react";

const Badge = ({ text }) => {
  return (
    <span className="inline-block bg-purple-500 text-white text-xs px-2 py-1 rounded-md">
      {text}
    </span>
  );
};

export default Badge;

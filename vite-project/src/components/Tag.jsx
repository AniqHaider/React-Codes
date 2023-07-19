import React from "react";

// tailwind css doesnt work with template literal so i had to use vanilla css
const Tag = ({ label, color }) => {
  let bgColorClass = "";
  let textColorClass = "";

  // Set the background color and text color based on the provided color prop
  switch (color) {
    case "blue":
      bgColorClass = "bg-blue-500";
      textColorClass = "text-white";
      break;
    case "green":
      bgColorClass = "bg-green-500";
      textColorClass = "text-white";
      break;
    case "yellow":
      bgColorClass = "bg-yellow-500";
      textColorClass = "text-black"; // Changing text color to black for better visibility
      break;
    default:
      bgColorClass = "bg-gray-500";
      textColorClass = "text-white";
  }

  return (
    <span
      className={`inline-block ${bgColorClass} ${textColorClass} text-xs px-2 py-1 rounded-md`}
    >
      {label}
    </span>
  );
};

export default Tag;


// const Tag = ({ label, color }) => {
//   return (
//     <span
//       className={`inline-block bg-${color}-500 text-white text-xs px-2 py-1 rounded-md`}
//     >
//       {label}
//     </span>
//   );
// };


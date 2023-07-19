import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  let timeout;

  const handleRating = (value) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (value === rating) {
        // If the same star is clicked, unselect it
        setRating(0);
      } else {
        // Otherwise, select the clicked star
        setRating(value);
      }
    }, 200); // Adjust the delay (in milliseconds) as needed
  };

  const Star = ({ filled }) => {
    return filled ? (
      <span role="img" aria-label="Filled Star">
        ★
      </span>
    ) : (
      <span role="img" aria-label="Empty Star">
        ☆
      </span>
    );
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          onClick={() => handleRating(value)}
          className="text-2xl mr-1 focus:outline-none"
          onFocus={() => handleRating(value)}
          onBlur={() => handleRating(0)}
        >
          <Star filled={value <= rating} />
        </button>
      ))}
      <span className="text-xl font-semibold">{rating} stars</span>
    </div>
  );
};

export default Rating;

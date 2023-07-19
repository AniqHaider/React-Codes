import React from "react";

const ProgressTracker = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between items-center mt-10 mb-10">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        const stepNumberClasses = `rounded-full w-6 h-6 flex items-center justify-center ${
          isCompleted ? "bg-green-500" : "bg-gray-500"
        }`;
        const stepLineClasses = `h-1 w-10 ml-1 ${
          isCompleted ? "bg-green-500" : "bg-gray-500"
        }`;

        return (
          <div
            key={index}
            className={`flex items-center ${
              isActive ? "text-green-500" : "text-gray-500"
            }`}
          >
            <div className={stepNumberClasses}>{index + 1}</div>
            {index !== steps.length - 1 && <div className={stepLineClasses} />}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressTracker;

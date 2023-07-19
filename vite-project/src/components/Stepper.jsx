import React from "react";

const Stepper = ({ steps, activeStep, handleNext, handleBack }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <div className="flex mb-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-1/4 ${
                index === activeStep ? "text-blue-500" : "text-gray-500"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  index === activeStep ? "bg-blue-500" : "bg-gray-500"
                }`}
              />
              <div className="ml-2">{step}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            className={`px-4 py-2 mr-2 ${
              activeStep === 0 ? "invisible" : "visible"
            }`}
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className={`px-4 py-2 ${
              activeStep === steps.length - 1 ? "invisible" : "visible"
            }`}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;

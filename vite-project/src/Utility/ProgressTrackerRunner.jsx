import React, { useState } from "react";
import ProgressTracker from "../components/ProgressTracker";

const ProgressTrackerRunner = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const isPreviousDisabled = currentStep === 0;
  const isNextDisabled = currentStep === steps.length - 1;

  return (
    <div>
      <hr className="mt-10" />
      <ProgressTracker steps={steps} currentStep={currentStep} />
      <button
        onClick={handlePreviousStep}
        disabled={isPreviousDisabled}
        className="carousel__button m-5 bg-red-500 text-white py-2 px-4 rounded border border-black hover:bg-red-700"
      >
        Previous
      </button>
      <button
        onClick={handleNextStep}
        disabled={isNextDisabled}
        className="carousel__button m-5 bg-green-500 text-white py-2 px-4 rounded border border-black hover:bg-green-700"
      >
        Next
      </button>
      <hr className="mt-10" />
    </div>
  );
};

export default ProgressTrackerRunner;

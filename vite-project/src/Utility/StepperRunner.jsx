import React, { useState } from 'react';
import Stepper from '../components/Stepper';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4']; // Replace with your actual step names

const StepperRunner = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  return (
    <div>
      {/* Your other components */}
      <Stepper
        steps={steps}
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
      {/* Your other components */}
    </div>
  );
};

export default StepperRunner;

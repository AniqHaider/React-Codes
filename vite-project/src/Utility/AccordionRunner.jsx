import React from "react";
import Accordion from "../components/Accordion";

const AccordionRunner = () => {
  return (
    <div className="container mx-auto mt-4">
      <Accordion
        title="Section 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Accordion
        title="Section 2"
        content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion
        title="Section 3"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <hr className="mt-8 mb-10" />
    </div>
  );
};

export default AccordionRunner;

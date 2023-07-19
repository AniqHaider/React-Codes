import React from "react";
import Dropdown from "../components/Dropdown";

const DropdownRunner = () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <div className="container mx-auto mt-4 mb-4">
      <Dropdown options={options} onSelect={handleSelect} />
      <hr className="mt-8"/>
    </div>
  );
};

export default DropdownRunner;

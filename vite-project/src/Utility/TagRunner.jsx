import React from "react";
import Tag from "../components/Tag";

const TagRunner = () => {
  return (
    <div className="mt-4 mb-4">
      <h1 className="mb-5">Tag Example</h1>
      <div className="flex gap-2">
        <Tag label="React" color="blue" />
        <Tag label="Tailwind CSS" color="green" />
        <Tag label="JavaScript" color="yellow" />
      </div>
      <hr className="mt-8" />
    </div>
  );
};

export default TagRunner;

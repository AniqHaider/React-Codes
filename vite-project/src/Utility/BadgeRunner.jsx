import React from "react";
import Badge from "../components/Badge";

const BadgeRunner = () => {
  return (
    <div className="mt-10 mb-10">
      <hr />
      <h1 className="mb-5">Badge Example</h1>
      <Badge text="New Badge" />
      <hr className="mt-5"/>
    </div>
  );
};

export default BadgeRunner;

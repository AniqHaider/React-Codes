import React from "react";
import ListGroup from "../components/ListGroup";

const ListgroupRunner = () => {
  const items = [
    {
      title: "Item 1",
      description: "Lorem ipsum sin Lorem ipsum sin dolor amet dolor amet",
    },
    {
      title: "Item 2",
      description:
        "Lorem ipsum sin dolor amet Lorem ipsum sin dolor amet Lorem ipsum sin dolor amet",
    },
    {
      title: "Item 3",
      description: "Lorem Lorem ipsum sin dolor amet ipsum sin dolor amet",
    },
    // Add more items here
  ];

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">List Group Example</h1>
      <ListGroup items={items} />
    </div>
  );
};

export default ListgroupRunner;

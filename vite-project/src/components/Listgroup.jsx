import React from "react";

const ListGroup = ({ items }) => {
  return (
    <ul className="list-group mt-3 mb-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="list-group-item mt-3 mb-3 bg-white shadow-md p-4"
        >
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;

import React from "react";

const Breadcrumbs = ({ paths }) => {
  return (
    <nav className="text-gray-600">
      <ol className="list-none p-0 inline-flex">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            <a href={path.url} className="hover:text-gray-800">
              {path.label}
            </a>
            {index < paths.length - 1 && (
              <svg
                className="h-5 w-5 mx-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

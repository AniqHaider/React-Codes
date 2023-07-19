import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-200 bg-opacity-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-6 mx-auto bg-white rounded-lg shadow-md">
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-2">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

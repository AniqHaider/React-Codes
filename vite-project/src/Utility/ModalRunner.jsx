import React, { useState } from "react";
import Modal from "../components/Modal";

const ModalRunner = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mb-10 mt-10 ">
      <h1 className="mb-5 mt-5">Modal</h1>
      <button onClick={openModal} className="bg-red-500 text-white">
        Error Modal
      </button>
      <Modal isOpen={showModal} onClose={closeModal}>
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Modal Content</h2>
          <h1 className="text-4xl text-red-500">ERROR 404</h1>
        </div>
      </Modal>
    </div>
  );
};

export default ModalRunner;

"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[895px] h-[762px] px-[235px] bg-white rounded-[20px] shadow-lg relative">
        <button type="button" onClick={closeModal} className="absolute top-8 right-10 bg-transparent text-gray-700 hover:text-black" aria-label="Close modal">
          <img src="/images/CloseIcon.svg" alt="Close" className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};

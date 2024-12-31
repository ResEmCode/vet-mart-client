"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  className?: string;
  classNameBody?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children, className, classNameBody }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.7)] ${className}`}>
      <div className={`bg-white p-12 rounded-[4px] w-full max-w-[800px] min-w-[300px] ${classNameBody}`}>
        <button type="button" onClick={closeModal} className="text-end ml-auto block" aria-label="Close modal">
          <img src="/images/CloseIcon.svg" alt="Close" className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};

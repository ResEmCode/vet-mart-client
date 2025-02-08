"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import { cn } from "@/shared/lib/utils";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface ModalProps {
  closeModal: () => void;
  children: React.ReactNode;
  className?: string;
  classNameBody?: string;
  isOpen?: boolean;
}

export const Modal = ({ closeModal, children, className, classNameBody, isOpen = false }: ModalProps) => {
  const portalRoot = useRef(document.getElementById("portal-root"));

  useEffect(() => {
    if (!portalRoot.current) {
      const div = document.createElement("div");
      div.id = "portal-root";
      document.body.appendChild(div);
      portalRoot.current = div;
    }
  }, []);

  return (
    portalRoot.current &&
    createPortal(
      <div className={cn(styles.window, className, { [styles.active]: isOpen })} onClick={closeModal}>
        <div className={cn(styles.body, classNameBody)} onClick={(e) => e.stopPropagation()}>
          <button type="button" onClick={closeModal} className={styles.btn} aria-label="Close modal">
            <X width={30} className="hover:text-gray-500" />
          </button>
          {children}
        </div>
      </div>,
      portalRoot.current,
    )
  );
};

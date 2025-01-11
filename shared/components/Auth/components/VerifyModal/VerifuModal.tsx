"use client";

import { Modal } from "@/shared/ui/shadcn";

import { VerifyForm } from "../VerifyForm/VerifyForm";

export const VerifuModal = () => {
  return (
    <Modal isOpen closeModal={() => false}>
      <VerifyForm />
    </Modal>
  );
};

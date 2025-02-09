"use client"

import { InputLabel } from "@/shared/ui/custom";
import { Button, Modal } from "@/shared/ui/shadcn";
import { useDiscountForm } from "../../hooks";

interface DiscountModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const DiscountModal = ({ isOpen, closeModal }: DiscountModalProps) => {
  const { register, errors, functions } = useDiscountForm();

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} classNameBody="max-w-[600px]">
      <form className="flex flex-col gap-[20px]" onSubmit={functions.onSubmit}>
        <div className="flex gap-[20px]">
          <InputLabel type="number" placeholder="ваша скидка..." text="введите скидку в %" {...register("discount")} error={errors.discount?.message} />
          <InputLabel type="number" placeholder="артикул тавара..." text="Укажите артикул тавара" {...register("article")} error={errors.article?.message} />
        </div>
        <Button type="submit" className="rounded-[4px]">
          Добавить скидку
        </Button>
      </form>
    </Modal>
  );
};

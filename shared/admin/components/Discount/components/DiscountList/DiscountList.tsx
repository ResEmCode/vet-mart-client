"use client";

import { useState } from "react";
import { useDiscount } from "../../hooks";
import { DiscountCard } from "../DiscountCard/DiscountCard";
import { Modal } from "@/shared/ui/shadcn";
import { DiscountEditForm } from "../DiscountEditForm/DiscountEditForm";

export const DiscountList = () => {
  const { products, onDelete, onUpdate } = useDiscount();
  const [activeEditIndex, setActiveEditIndex] = useState(-1);
  const onEdit = (id: number) => {
    const findIndex = products.findIndex((item) => item.id === Number(id));
    if (findIndex >= 0) {
      setActiveEditIndex(findIndex);
    } else {
      setActiveEditIndex(-1);
    }
  };

  const onUpdateFn = (value: string) => {
    const currentProduct = products[activeEditIndex];
    if (currentProduct) {
      onUpdate({ discount: value, productId: currentProduct.id });
    }
    setActiveEditIndex(-1);
  };

  return (
    <>
      <ul className="flex flex-col gap-[20px]">
        {products?.map(({ id, discount, articles }) => (
          <DiscountCard key={id} articles={articles} id={id} discount={discount} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </ul>
      <Modal isOpen={activeEditIndex >= 0} closeModal={() => setActiveEditIndex(-1)} classNameBody="max-w-[600px]">
        <DiscountEditForm discount={products[activeEditIndex]?.discount} onUpdate={(value) => onUpdateFn(value)} />
      </Modal>
    </>
  );
};

"use client";

import React, { useState } from "react";

import { Button } from "@/shared/ui/shadcn";

const navButtons = [
  { id: "description", label: "Описание" },
  { id: "reviews", label: "Отзывы" },
  { id: "composition", label: "Состав" },
];

export const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="max-w-[800px]">
      <div className="flex justify-start gap-7 border-b border-gray-300 mb-[30px]">
        {navButtons.map((button) => (
          <Button key={button.id} onClick={() => setActiveTab(button.id)} variant={activeTab === button.id ? "active" : "primary"} className="max-w-[120px] w-full">
            {button.label}
          </Button>
        ))}
      </div>

      <div className="mb-[100px] text-gray-400">
        {activeTab === "description" && (
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        )}
        {activeTab === "reviews" && <p>123</p>}
        {activeTab === "composition" && <p>321denisbaran</p>}
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";

import { Button } from "@/shared/ui/shadcn";

const navButtons = [
  { id: "description", label: "Описание" },
  { id: "reviews", label: "Отзывы" },
  { id: "composition", label: "Состав" },
];

interface ProductDetailsProps {
  desc: string;
}

export const ProductDetails = ({ desc }: ProductDetailsProps) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="max-w-[800px]">
      <div className="flex justify-start gap-7 border-b border-gray-300 mb-[30px]">
        {navButtons.map((button) => (
          <Button
            key={button.id}
            onClick={() => setActiveTab(button.id)}
            variant={activeTab === button.id ? "active" : "primary"}
            className="max-w-[120px] w-full"
          >
            {button.label}
          </Button>
        ))}
      </div>

      <div className="mb-[100px] text-gray-400">
        {activeTab === "description" && <p>{desc}</p>}
        {activeTab === "reviews" && <p>123</p>}
        {activeTab === "composition" && <p>321denisbaran</p>}
      </div>
    </div>
  );
};

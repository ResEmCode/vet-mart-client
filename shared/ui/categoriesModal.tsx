import React from "react";
import Link from "next/link";

import { CATEGORIES } from "../shared/Navigation/components/navigation.data";

export const CategoriesModal: React.FC = () => {
  return (
    <div className="absolute top-[-10px] left-0 mt-2 bg-white shadow-lg rounded-lg p-4 z-50 w-[800px] border transition-all duration-300 ">
      <div className="grid grid-cols-2 gap-6 hover:bg-gray">
        {CATEGORIES.map((category) => (
          <div key={category.id} className="flex items-start gap-4">
            <img src="/image.png" alt={category.name} className="w-16 h-16 object-cover rounded-lg" />
            <div className="flex-1 flex flex-col">
              <Link href={category.href} className="text-lg font-semibold text-black hover:underline">
                {category.name}
              </Link>
              <p className="text-gray-500">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

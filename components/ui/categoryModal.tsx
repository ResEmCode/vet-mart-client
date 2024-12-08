import React from "react";

import type { CategoryModalProps } from "../shared/Navigation/components/navigation.data";

export const CategoryModal: React.FC<CategoryModalProps> = ({ category, closeModal, maxWidthClass }) => {
  return (
    <div
      className={`absolute mt-1 left-0 bg-white shadow-lg rounded-lg p-4  ${maxWidthClass} border z-50
        transition-all duration-300 opacity-0 scale-95 transform group-hover:opacity-100 group-hover:scale-100`}
      onMouseLeave={closeModal}
    >
      <div className="flex flex-wrap gap-6">
        {category.modalContent.sections?.map((section) => (
          <div key={section.id} className="flex items-start gap-4 w-full border-b pb-4 last:border-0 last:pb-0">
            <img src={section.images[0] || "/placeholder.png"} alt={section.title || "No title"} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />

            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>

              {section.links && section.links.length ? (
                <div className="flex flex-wrap gap-y-3 gap-x-4">
                  {section.links.map((link) => (
                    <a
                      key={link.to}
                      href={link.to}
                      className="hover:underline whitespace-nowrap py-1 px-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No links available</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

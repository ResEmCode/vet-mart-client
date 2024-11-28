"use client";
import React, { useState } from 'react';

export const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="max-w-[800px]">
      <div className="flex justify-start gap-7 border-b border-gray-300 mt-[200px] mb-[70px]">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-6 py-2 text-lg font-medium rounded-full transition-all w-[200px] h-[45px] ${
            activeTab === 'description'
              ? 'bg-[#FF87321A] text-[#FF8732] border border-orange-500'
              : 'bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-100 hover:text-[#FF8732] '
          }`}>Описание</button>
        
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-6 py-2 text-lg font-medium rounded-full transition-all w-[200px] h-[45px] ${
            activeTab === 'reviews'
              ? 'bg-[#FF87321A] text-[#FF8732] border border-orange-500'
              : 'bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-100 hover:text-[#FF8732] '
          }`}>Отзывы</button>
        
        <button
          onClick={() => setActiveTab('composition')}
          className={`px-6 py-2 text-lg font-medium rounded-full transition-all w-[200px] h-[45px] ${
            activeTab === 'composition'
              ? 'bg-[#FF87321A] text-[#FF8732] border border-orange-500'
              : 'bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-100 hover:text-[#FF8732]'
          }`}>Состав</button>
      </div>

      <div className="mb-[100px] text-[#7C7C7C]">
        {activeTab === 'description' && (
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        )}
        {activeTab === 'reviews' && (
          <p>123</p>
        )}
        {activeTab === 'composition' && (
          <p>321denisbaran</p>
        )}
      </div>
    </div>
  );
};



import React from "react";

import { HeaderSlider } from "./components/HeaderSlider";

export const Header = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex-1 max-w-[690px] h-[420px] bg-white border border-gray-300 rounded-lg shadow-md justify-center items-center">
        <HeaderSlider />
      </div>
      <div className="flex flex-col flex-1 max-w-[690px] ml-[25px]">
        <div className="w-full h-[200px] bg-white border border-gray-300 rounded-lg shadow-md flex justify-center items-center text-center mb-[19px]">
          Курьер по области
        </div>
        <div className="w-full h-[200px] bg-white border border-gray-300 rounded-lg shadow-md flex justify-center items-center text-center">
          Консультация по ветпрепаратам
        </div>
      </div>
    </div>
  );
};

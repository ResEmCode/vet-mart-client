import React from "react";

export const Footer = () => {
  return (
<div className="bg-[#FF8732]">
  <footer className="py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-xl font-bold text-white">Ветмарт</h2>
          <p className="text-white">©VetMart2024</p>
          <div className="flex space-x-2">
            <img src="/visa.png" alt="Visa" className="w-[80px] h-[20px]" />
          </div>
        </div>

        <div className="flex flex-col space-y-1 text-white text-sm">
          <a href="#" className="hover:underline">Каталог</a>
          <a href="#" className="hover:underline">Про нас</a>
          <a href="#" className="hover:underline">Оплата і доставка</a>
          <a href="#" className="hover:underline">Обмін та повернення</a>
          <a href="#" className="hover:underline">Контактна інформація</a>
          <a href="#" className="hover:underline">Політика конфіденційності</a>
        </div>

        <div className="text-white text-sm flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <img src="/gde.svg" alt="tag" />
            <p>Вінниця, вул. Театральна, буд. 7, кв. 11</p>
          </div>
          <span>+38 (099) 967-87-57</span>
        </div>
      </div>
    </div>
  </footer>
</div>

  );
};



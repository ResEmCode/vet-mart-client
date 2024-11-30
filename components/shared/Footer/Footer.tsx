import React from "react";

import { Container } from "@/components/shared/";

const menuLinks = [
  {
    href: "/catalog",
    name: "Каталог",
  },
  {
    href: "/aboutus",
    name: "Про нас",
  },
  {
    href: "/pay",
    name: "Оплата і доставка",
  },
  {
    href: "/turning",
    name: "Обмін та повернення",
  },
  {
    href: "/contacts",
    name: "Контактна інформація",
  },
  {
    href: "/policy",
    name: "Політика конфіденційності",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#FF8732]">
      <footer className="py-4">
        <Container variant="footer">
          <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-col items-start space-y-2">
              <h2 className="text-xl font-bold text-white">Ветмарт</h2>
              <p className="text-white">©VetMart2024</p>
              <div className="flex space-x-2">
                <img src="/mastercard.svg" alt="Visa" className="w-[80px] h-[20px]" />
              </div>
            </div>

            <div className="flex flex-col space-y-1 text-white text-sm">
              {menuLinks.map((link) => (
                <a href={link.href}>{link.name}</a>
              ))}
            </div>

            <div className="text-white text-sm flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <img src="/gde.svg" alt="tag" />
                <p>Вінниця, вул. Театральна, буд. 7, кв. 11</p>
              </div>
              <span>+38 (099) 967-87-57</span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

import { Container } from "@/shared/ui/custom/Container/Container";
import Link from "next/link";
import { FOOTER_MENU } from "./Footer.data";

export const Footer = () => {
  return (
    <footer className="bg-[#FF8732] py-4">
      <Container variant="short">
        <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col items-start space-y-2">
            <h2 className="text-xl font-bold text-white">Ветмарт</h2>
            <p className="text-white">©VetMart2024</p>
            <div className="flex space-x-2">
              <img src="/mastercard.svg" alt="Visa" className="w-[80px] h-[20px]" />
            </div>
          </div>

          <div className="flex flex-col space-y-1 text-white text-sm">
            {FOOTER_MENU.map((link) => (
              <a key={link.name} href={link.href} className="hover:underline">
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-white text-sm flex flex-col space-y-1">
            <Link target="_blank" href="https://maps.app.goo.gl/Az294Ei1TJdUBP3j6" className="flex items-center space-x-2 gap-1 hover:underline">
              <img src="/gde.svg" alt="tag" />
              Вінниця, вул. Театральна, буд. 7, кв. 11
            </Link>
            <Link href="tel:+38 (099) 967-87-57">+ 38 (099) 967-87-57</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

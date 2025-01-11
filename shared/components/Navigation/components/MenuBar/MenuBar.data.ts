interface MenuObjectType {
  id: number;
  name: string;
  href: string;
}

export const MENU_DATA: MenuObjectType[] = [
  { id: 1, name: "Каталог", href: "/" },
  { id: 2, name: "О нас", href: "/about" },
  { id: 3, name: "Оплата и доставка", href: "/payment" },
  { id: 4, name: "Возврат и обмен", href: "/return" },
  { id: 5, name: "Контакты", href: "/contacts" },
  { id: 6, name: "Новости", href: "/news" },
];

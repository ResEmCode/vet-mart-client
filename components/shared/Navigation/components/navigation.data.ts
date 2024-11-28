export interface NavLink {
  id: number;
  name: string;
  href: string;
}

export interface Category {
  id: number;
  name: string;
  href: string;
  description: string;
}

export interface Icon {
  id: number;
  src: string;
  alt: string;
  text: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: 1, name: "Главная", href: "/" },
  { id: 2, name: "О нас", href: "/about" },
  { id: 3, name: "Оплата и доставка", href: "/payment" },
  { id: 4, name: "Возврат и обмен", href: "/return" },
  { id: 5, name: "Контакты", href: "/contacts" },
  { id: 6, name: "Новости", href: "/news" },
];

export const CATEGORIES: Category[] = [
  { id: 1, name: "Кошки", href: "/cats", description: "Корма, ветпрепараты, игрушки" },
  { id: 2, name: "Собаки", href: "/dogs", description: "Корма, ветпрепараты, игрушки" },
  { id: 3, name: "Птицы", href: "/birds", description: "Корма, ветпрепараты, игрушки" },
  { id: 4, name: "Грызуны", href: "/vet-medicines", description: "Корма, ветпрепараты, игрушки" },
];

export const ICONS: Icon[] = [
  { id: 1, src: "/navigation/cart.png", alt: "cart", text: "Корзина" },
  { id: 2, src: "/navigation/like.png", alt: "like", text: "Избранное" },
  { id: 3, src: "/navigation/profile.png", alt: "profile", text: "Профиль" },
];

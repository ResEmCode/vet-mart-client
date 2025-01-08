export interface NavLink {
  id: number;
  name: string;
  href: string;
}

export interface Section {
  id: number;
  title: string;
  images: string[];
  links?: [];
}

export interface ModalContent {
  title: string;
  sections: Section[];
  images: string[];
}

export interface CategoryModalProps {
  category: {
    id: number;
    name: string;
    description: string;
    modalContent: {
      sections: {
        id: number;
        images: string[];
        title: string;
        links?: { text: string; to: string }[];
      }[];
    };
  };
  closeModal: () => void;
  maxWidthClass: string;
}
export interface Category {
  href: string;
  id: number;
  name: string;
  description: string;
  modalContent: {
    sections: {
      id: number;
      images: string[];
      title: string;
      links?: { text: string; to: string }[];
    }[];
  };
}

export interface CategoryWithModalProps {
  category: Category;
  activeCategoryId: number | null;
  setActiveCategoryId: React.Dispatch<React.SetStateAction<number | null>>;
}
export interface Icon {
  id: number;
  src: string;
  alt: string;
  text: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: 1, name: "Каталог", href: "/" },
  { id: 2, name: "О нас", href: "/about" },
  { id: 3, name: "Оплата и доставка", href: "/payment" },
  { id: 4, name: "Возврат и обмен", href: "/return" },
  { id: 5, name: "Контакты", href: "/contacts" },
  { id: 6, name: "Новости", href: "/news" },
];

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Кошки",
    href: "/category",
    description: "Корма, ветпрепараты, игрушки",
    modalContent: {
      sections: [
        {
          images: ["/image.png"],
          title: "Годування котів",
          links: [
            { text: "Сухий корм для котів на вагу", to: "/dry-food-bulk-for-cats" },
            { text: "Сухий корм для котів у мішках", to: "/dry-food-bags-for-cats" },
            { text: "Сухий корм для котів у пакетах", to: "/dry-food-packs-for-cats" },
            { text: "Сухий корм для котів ветеринарна дієта", to: "/dry-food-veterinary-diet-for-cats" },
            { text: "Вологий корм для котів", to: "/wet-food-for-cats" },
            { text: "Вологий корм для котів ветеринарна дієта", to: "/wet-food-veterinary-diet-for-cats" },
          ],
          id: 0,
        },
        {
          images: ["/image.png"],
          title: "Ветпрепарати для котів",
          links: [
            { text: "Антисекс для котів і кошек", to: "/anti-sex-for-cats" },
            { text: "Антистрес для котів", to: "/anti-stress-for-cats" },
            { text: "Засоби від бліх для котів", to: "/flea-remedies-for-cats" },
            { text: "Засоби від кліщів для котів", to: "/tick-remedies-for-cats" },
            { text: "Засоби від гельмінтів для котів", to: "/deworming-for-cats" },
            { text: "Протигрибкові засоби для котів", to: "/anti-fungal-for-cats" },
            { text: "Від сечокам'яної хвороби у котів", to: "/urinary-disease-remedies-for-cats" },
            { text: "Від вушних кліщів у котів", to: "/ear-mite-remedies-for-cats" },
            { text: "Краплі очні та вушні", to: "/eye-and-ear-drops-for-cats" },
          ],
          id: 0,
        },
        {
          images: ["/image.png"],
          title: "Місця для відпочинку для котів",
          id: 0,
        },
        {
          images: ["/image.png"],
          title: "Дряпки",
          id: 0,
        },
      ],
    },
  },
  {
    id: 2,
    name: "Собаки",
    href: "/category/dogs",
    description: "Корма, ветпрепараты, игрушки",
    modalContent: {
      sections: [
        {
          images: ["/image.png"],
          title: "Сухий корм для собак ",
          id: 0,
        },
        {
          images: ["/image.png"],
          title: "Ветпрепарати для собак",
          links: [
            { text: "Антисекс для собак", to: "/anti-sex-for-dogs" },
            { text: "Антистрес для собак", to: "/anti-stress-for-dogs" },
            { text: "Засоби від бліх для собак", to: "/flea-remedies-for-dogs" },
            { text: "Засоби від кліщів для собак", to: "/tick-remedies-for-dogs" },
            { text: "Засоби від гельмінтів для собак", to: "/deworming-for-dogs" },
            { text: "Від вушних кліщів у собак", to: "/ear-mite-remedies-for-dogs" },
            { text: "Противогрибкові засоби для собак", to: "/anti-fungal-for-dogs" },
          ],
          id: 0,
        },
        {
          images: ["/image.png"],
          title: "Місця для відпочинку для собак",
          id: 0,
        },
        {
          images: ["/image.png"],
          title: "Одяг для собак",
          links: [
            {
              text: "Весна - осінь",
              to: "/spring-autumn",
            },
          ],
          id: 0,
        },
      ],
    },
  },
  {
    id: 3,
    name: "Птицы",
    href: "/category/birds",
    description: "Корма, ветпрепараты, игрушки",
    modalContent: {
      sections: [
        {
          images: ["/image.png"],
          title: "Клiтки",
          links: [],
          id: 0,
        },
      ],
    },
  },
  {
    id: 4,
    name: "Грызуны",
    href: "/category/rodents",
    description: "Корма, ветпрепараты, игрушки",
    modalContent: {
      sections: [
        {
          title: "Грызуны",
          links: [],
          images: ["/image.png"],
          id: 0,
        },
      ],
    },
  },
];

export const ICONS: Icon[] = [
  { id: 1, src: "/navigation/cart.png", alt: "cart", text: "Корзина" },
  { id: 2, src: "/navigation/like.png", alt: "like", text: "Избранное" },
  { id: 3, src: "/navigation/profile.png", alt: "profile", text: "Профиль" },
];

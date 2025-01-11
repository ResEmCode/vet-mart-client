interface CategoriesObjectType {
  id: number;
  name: string;
  query: string;
  description: string;
}

export const CATEGORIES_MENU: CategoriesObjectType[] = [
  {
    id: 1,
    name: "Кошки",
    query: "cats",
    description: "Корма, ветпрепараты, игрушки",
  },
  {
    id: 2,
    name: "Собаки",
    query: "dogs",
    description: "Корма, ветпрепараты, игрушки",
  },
  {
    id: 3,
    name: "Птицы",
    query: "birds",
    description: "Корма, ветпрепараты, игрушки",
  },
  {
    id: 4,
    name: "Грызуны",
    query: "rodents",
    description: "Корма, ветпрепараты, игрушки",
  },
];

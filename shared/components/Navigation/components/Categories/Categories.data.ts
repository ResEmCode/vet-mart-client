interface CategoriesObjectType {
  id: number;
  name: string;
  type: string;
  animal: string;
  description: string;
}

export const CATEGORIES_MENU: CategoriesObjectType[] = [
  {
    id: 1,
    name: "Кошки",
    animal: "cats",
    type: "all",
    description: "Корма, ветпрепараты, игрушки",
  },
  {
    id: 2,
    name: "Собаки",
    animal: "dogs",
    type: "all",
    description: "Корма, ветпрепараты, игрушки",
  },
  {
    id: 3,
    name: "Птицы",
    animal: "birds",
    type: "all",
    description: "Корма, ветпрепараты, игрушки",
  },
  {
    id: 4,
    name: "Грызуны",
    animal: "rodents",
    type: "all",
    description: "Корма, ветпрепараты, игрушки",
  },
];

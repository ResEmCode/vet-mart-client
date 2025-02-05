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
    type: "food",
    description: "Корма, лекарства",
  },
  {
    id: 2,
    name: "Собаки",
    animal: "dogs",
    type: "food",
    description: "Корма, Аммуниция",
  },
  {
    id: 3,
    name: "Птицы",
    animal: "birds",
    type: "all",
    description: "Корма, Кормушки",
  },
  {
    id: 4,
    name: "Грызуны",
    animal: "rodents",
    type: "all",
    description: "Корма, Витамины",
  },
  {
    id: 5,
    name: "Рептилии",
    animal: "reptiles",
    type: "all",
    description: "Корма, Декорации",
  }
];

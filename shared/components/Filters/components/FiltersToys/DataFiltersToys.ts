interface DataFiltersToysTypes {
  title: string;
  filter: "brand" | "toysType" | "color" | "country";
  checkboxes: string[];
}

export const DataFiltersToys: DataFiltersToysTypes[] = [
  {
    title: "Бренд",
    filter: "brand",
    checkboxes: ["Brekkies", "Club 4 Paws", "Josera", "Мяу! "],
  },
  {
    title: "Тип игрушки",
    filter: "toysType",
    checkboxes: ["дряпка-лежак", "когтечока", "когтеточка с домиком"],
  },
  {
    title: "Цвет",
    filter: "color",
    checkboxes: ["сиреневый", "синий", "белый", "коричневый"],
  },
  {
    title: "Страна",
    filter: "country",
    checkboxes: ["Россия", "Украина", "Беларусь", "Казахстан"],
  },
];

interface AdvantageObjectType {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
}

export const ADVANTAGE_DATA: AdvantageObjectType[] = [
  {
    id: 1,
    title: "Доставка по области",
    text: "от 500 ₴ бесплатно",
    imageUrl: "/advantages/delivery.png",
  },
  {
    id: 2,
    title: "Консультация",
    text: "Поможем подобрать нужные ветпрепараты, корм и т.д.",
    imageUrl: "/advantages/consultaion.png",
  },
  {
    id: 3,
    title: "Заказ нужного вам товара",
    text: "Мы привезем вам то, что нужно!",
    imageUrl: "/advantages/offer.png",
  },
  {
    id: 4,
    title: "Выгоднее чем у других",
    text: "Наша стоимость ниже чем у других зоомагазинов",
    imageUrl: "/advantages/profit.png",
  },
];

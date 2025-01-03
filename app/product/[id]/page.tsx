import { ProductBuyMenu, ProductSlider, Typography } from "@/shared/shared";

import styles from "./page.module.css";

const characteristics = [
  {
    id: 1,
    title: "Артикул",
    value: "1111111",
  },
  {
    id: 2,
    title: "Страна производства",
    value: "Франция",
  },
  {
    id: 3,
    title: "Вес",
    value: "10000 г",
  },
];
const ProductPage = () => {
  return (
    <div>
      <Typography variant="title48_semibold" tag="h1" className="mb-16">
        Сухий корм для котів happy pet
      </Typography>
      <div>
        <div className={styles.row}>
          <ProductSlider />
          <ProductBuyMenu />
        </div>
        <div className={styles.info}>
          <div>Компонент амеги</div>
          <div className="flex flex-col gap-4 max-w-[310px] w-full">
            <Typography variant="title24_bold" tag="h2">
              Характеристики
            </Typography>
            <ul className="flex flex-col gap-2 w-full">
              {characteristics.map((characteristic) => (
                <li key={characteristic.id} className="flex items-center justify-between">
                  <span>{characteristic.title}</span>
                  <span>{characteristic.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

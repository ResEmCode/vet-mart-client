import {  DiscountHeader, DiscountList } from "@/shared/admin/components/Discount/components";

import styles from "./page.module.css";

const DiscountsPage = () => {
  return (
    <div>
      <DiscountHeader />
      <div className={styles.card_title}>
        <span>Скидка:</span>
        <span>Артиклы товара:</span>
        <button>Действия:</button>
      </div>
      <DiscountList />
    </div>
  );
};

export default DiscountsPage;

import React from "react";

import { Container, Typography } from "@/shared/ui/custom";

const PaymentPage = () => {
  return (
    <Container className="mb-[60px] mt-[40px]">
      <Typography tag="h1" variant="title24_bold" className="mb-[20px]">
        Оплата и доставка
      </Typography>

      <div className="mb-[30px]">
        <Typography tag="h2" variant="paragraph16_medium" className="mb-[8px]">
          Оплата:
        </Typography>
        <ul>
          <li>- Наличным расчетом при получении товара при заказе и доставке по Виннице</li>
          <li>- Банковскими картами при заказе по Виннице, межгород</li>
          <li>- Оплата банковской картой курьеру через терминал при заказе и доставке по Виннице</li>
        </ul>
      </div>
      <div>
        <Typography tag="h2" variant="paragraph16_medium" className="mb-[8px]">
          Доставка курьерами магазина по Виннице:
        </Typography>
        <ul className="mb-[30px]">
          <li>- Время доставки с 10:00 до 18:00</li>
          <li>- Рабочие дни доставки с понедельника по субботу</li>
          <li>- Доставка по Виннице при сумме заказа менее 500гривней составляет 50 гривней</li>
          <li>- При сумме заказа более 500 гривней доставка - по Виннице БЕСПЛАТНО!</li>
        </ul>
      </div>
      <div>
        <Typography tag="h2" variant="paragraph16_medium" className="mb-[8px]">
          Самовывоз по Виннице:
        </Typography>
        <ul>
          <li>- Самовывоз из ветеринарной аптеки по адресу: Вінниця, вул. Театральна, буд. 7, кв. 11</li>
          <li>- Внимание. Дополнительно по телефону уточните у администратора о наличии товара</li>
          <li>
            - Товар резервируется под самовывоз 24 часа с момента приема заказа, не считая воскресенья. Перед приездом , обязательно проинформируйте об этом
            администратора Интернет-магазина
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default PaymentPage;

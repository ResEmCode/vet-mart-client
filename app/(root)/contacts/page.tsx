import React from "react";

import { Container, Typography } from "@/shared/ui/custom";

const ContactsPage = () => {
  return (
    <Container className="mb-[60px] mt-[40px]">
      <Typography tag="h1" variant="title24_bold" className="mb-[20px]">
        Контакты
      </Typography>

      <div className="flex gap-2 justify-between">
        <div className="max-w-[600px w-full">
          <div className="flex gap-10 flex-wrap">
            <div className="mb-[30px]">
              <Typography tag="h2" variant="paragraph16_medium" className="mb-[8px]">
                Адрес
              </Typography>
              <p>Вінниця, вул. Театральна, буд. 7, кв. 11</p>
            </div>
            <div className="mb-[30px]">
              <Typography tag="h2" variant="paragraph16_medium" className="mb-[8px]">
                Телефон
              </Typography>
              <p>+ 38 (099) 967-87-57</p>
            </div>
            <div className="mb-[30px]">
              <Typography tag="h2" variant="paragraph16_medium" className="mb-[8px]">
                Почта:
              </Typography>
              <p>vetmart@ukr.net</p>
            </div>
          </div>
          <div>
            <Typography tag="h2" variant="paragraph16_medium" className="mb-[8px]">
              Рабочее время магазина
            </Typography>
            <ul>
              <li>09:00 — 20:00 C понедельника по пятницу</li>
              <li>09:00 — 18:00 в субботу</li>
              <li>воскресенье - выходной</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[600px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d325.63800351968445!2d28.464438668088142!3d49.2365168644822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b3f7c12d361%3A0x14266f0d2bc16561!2sVetmart!5e0!3m2!1sru!2sby!4v1737479303347!5m2!1sru!2sby"
            width="600"
            height="450"
            loading="lazy"
            title="Place"
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactsPage;

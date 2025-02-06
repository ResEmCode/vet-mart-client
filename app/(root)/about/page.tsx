import React from "react";

import { Container, Typography } from "@/shared/ui/custom";

import styles from "./page.module.css";

export default function page() {
  return (
    <Container>
      <div className="flex flex-col gap-4 pb-[100px]">
        <div className={styles.content}>
          <video controls src="/video.mp4" className="w-full">
            <track kind="captions" srcLang="en" src="/captions_en.vtt" label="English captions" default />
          </video>

          <div className={styles.text}>
            <Typography tag="h2" variant="title48_semibold" className="mb-[20px]">
              Про нас
            </Typography>
            <Typography tag="h2" variant="paragraph16_medium" color="subtitle">
              MasterZoo всеукраїнська мережа спеціалізованих зоомаркетів з широким и сучасним асортиментом для пухнастих, лускатих, хвостатих и пернатих
              особистостей. Асортимент налічує понад 10 тисяч найменувань товарів від 120 брендів. Тут є все: корми та ласощі, іграшки, засоби гігієни та
              ветеринарні препарати, амуніція, аксесуари та смарт-девайси. MasterZoo вже понад 15 років піклується про комфорт и здоров’я домашніх улюбленців. в
              майже 200 зоомаркетах в 36 містах та інтернет-магазині на хвостиків и їхніх людей завжди чекає професійна допомога, якісний товар и відмінний
              сервіс. в MasterZoo роблять все, щоб українські улюбленці були найщасливішими та найздоровішими в світі!
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}

import React from "react";

import { Typography } from "../Typography/Typography";

import { CardAdvantages } from "./components";
import { ADVANTAGE_DATA } from "./Advantage.data";

export const Advantages = () => {
  return (
    <div className="my-[60px]">
      <Typography variant="title48_semibold" tag="h2" className="mb-[20px]">
        Почему мы?
      </Typography>
      <div className="flex justify-center items-center gap-10">
        {ADVANTAGE_DATA.map((card) => (
          <CardAdvantages {...card} />
        ))}
      </div>
    </div>
  );
};

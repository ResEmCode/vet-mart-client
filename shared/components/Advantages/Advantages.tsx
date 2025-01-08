import React from "react";

import { Typography } from "../Typography/Typography";

import { CardAdvantages } from "./components";

export const Advantages = () => {
  return (
    <div className="flex flex-col gap-12">
      <Typography variant="title48_semibold" tag="h2">
        Почему мы?
      </Typography>
      <CardAdvantages />
    </div>
  );
};

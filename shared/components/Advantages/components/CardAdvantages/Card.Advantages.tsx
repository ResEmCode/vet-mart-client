import React from "react";
import Image from "next/image";

import { Typography } from "@/shared/ui/custom/Typography/Typography";

interface CardAdvantagesProps {
  title: string;
  text: string;
  imageUrl: string;
}

export const CardAdvantages = ({ title, text, imageUrl }: CardAdvantagesProps) => {
  return (
    <div className="rounded-sm shadow-md bg-white flex flex-col justify-center items-center max-w-[330px] w-full p-[50px] h-[240px]">
      <Image src={imageUrl} alt={title} width={95} height={95} />
      <Typography color="accent" className="text-lg font-bold text-center mt-4" tag="h3" variant="title24_bold">
        {title}
      </Typography>
      <Typography color="subtitle" className="text-sm text-center mt-2" tag="span" variant="paragraph15_medium">
        {text}
      </Typography>
    </div>
  );
};

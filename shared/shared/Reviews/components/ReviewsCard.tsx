import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Typography } from "../../Typography/Typography";

export const ReviewsCard = () => {
  return (
    <div className="rounded-sm flex flex-col gap-3 shadow-md bg-white max-w-[450px] w-full p-[20px]">
      <div className="flex gap-2 items-center">
        <Image src="/image.png" alt="image" width={50} height={50} />
        <div>
          <Typography variant="paragraph15_medium" color="default" tag="h2">
            Александра
          </Typography>
          <Typography variant="paragraph14_regular" color="subtitle" tag="span">
            вчора
          </Typography>
        </div>
        <span>* * * * *</span>
      </div>
      <div>
        <Typography className="pb-2" variant="paragraph15_medium" color="default" tag="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem et similique rem exercitationem repudiandae hic, quae recusandae nemo magnam,
          necessitatibus vel ducimus aliquam pariatur consequatur corporis doloribus, ut magni iste?
        </Typography>
        <Link href="/">Читать дальше</Link>
      </div>
    </div>
  );
};

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";
import { ANIMAL_TRANSLATE, TYPE_TRANSLATE } from "@/server/constants";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  console.log(searchParams.get("type"));

  const filterType = TYPE_TRANSLATE[searchParams.get("type") as keyof typeof TYPE_TRANSLATE];
  const animal = ANIMAL_TRANSLATE[searchParams.get("animal") as keyof typeof ANIMAL_TRANSLATE];

  const filter = await prisma.filter.findFirst({
    where: {
      title: {
        contains: filterType,
        mode: "insensitive",
      },
      categories: {
        some: {
          category: {
            name: {
              contains: animal,
              mode: "insensitive",
            },
          },
        },
      },
    },
    include: {
      groups: {
        include: {
          filterGroup: {
            include: {
              values: {
                include: {
                  filterValue: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return NextResponse.json(filter);
};

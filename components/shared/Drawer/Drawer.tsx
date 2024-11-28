import React from "react";
import { X } from "lucide-react";

import { Typography } from "../Typography/Typography";

import { DrawerCard } from "./components/DrawerCard";

interface Props {
  closeDrawer: () => void;
}

export const Drawer = ({ closeDrawer }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-end z-50">
      <div className="bg-white w-500 h-full shadow-lg p-8">
        <div className="flex items-center justify-between">
          <Typography variant="title36_semibold" tag="h2">
            Корзина
          </Typography>
          <X className="cursor-pointer" onClick={closeDrawer} />
        </div>
        <ul>
          <li>
            <DrawerCard />
          </li>
        </ul>
      </div>
    </div>
  );
};

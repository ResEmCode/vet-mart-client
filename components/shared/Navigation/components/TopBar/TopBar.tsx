"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { AuthForm } from "@/components/shared";
import { useModalAuth } from "@/components/shared/Auth/store";
import { Drawer } from "@/components/shared/Drawer/Drawer";
import { Typography } from "@/components/shared/Typography/Typography";
import { Input } from "@/components/ui";

import { ICONS } from "../navigation.data";

export const TopBar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  // const [modalOpen, setModalOpen] = React.useState(false);

  const { isAuthOpen, setIsAuthOpen } = useModalAuth();

  const onOpen = (text: string) => {
    switch (text) {
      case "Корзина":
        setOpenDrawer(true);
        break;
      case "Профиль":
        setIsAuthOpen(true);
        break;
      default:
        break;
    }
  };

  const { data } = useSession();

  return (
    <>
      {openDrawer && <Drawer closeDrawer={() => setOpenDrawer(false)} />}
      {isAuthOpen && <AuthForm closeModal={() => setIsAuthOpen(false)} />}

      <div className="flex justify-between items-center w-full box-border">
        <div className="flex items-center gap-[32px]">
          <div className="flex">
            <Typography variant="title36_semibold" tag="h2">
              Вет
            </Typography>
            <Typography variant="title36_semibold" tag="h2" color="accent">
              март
            </Typography>
          </div>
          <Typography variant="paragraph14_regular" tag="h2" className="leading-[16px] max-w-[300px]">
            Ветеринарный магазин в Виннице с 2022 года
          </Typography>
        </div>

        <Input placeholder="Поиск товара..." className="w-[950px] h-[46px] px-6 py-1 rounded-[48px] bg-white border-none placeholder:text-[#8598a7]" />

        <div className="flex gap-2 ml-[35px]">
          {[ICONS[0], ICONS[1]].map((icon) => (
            <div
              onClick={() => onOpen(icon.text)}
              onKeyDown={(e) => e.key === "Enter" && onOpen(icon.text)}
              key={icon.id}
              className="flex items-center w-[46px] h-[45px] bg-white rounded-full justify-around cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={icon.text}
            >
              <Image width={15} height={15} src={icon.src} alt={icon.alt} />
            </div>
          ))}

          {data ? (
            <Link href={`/profile/${data.user.id}`} className="flex items-center w-[46px] h-[45px] bg-white rounded-full justify-around cursor-pointer ">
              <img src={data.user?.image ?? "/user/image.png"} alt={ICONS[2].alt} className="rounded-full object-cover w-full h-full" />
            </Link>
          ) : (
            <button onClick={() => onOpen(ICONS[2].text)} className="flex items-center w-[46px] h-[45px] bg-white rounded-full justify-around cursor-pointer">
              <img src={ICONS[2].src} alt={ICONS[2].alt} className="rounded-full object-cover" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

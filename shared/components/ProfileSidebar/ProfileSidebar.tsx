import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export const ProfileSidebar = () => {
  const { data } = useSession();

  const onClickSignOut = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  const list = [
    {
      title: "Персональные данные",
      link: `/profile/personal-data`,
    },
    {
      title: "Мои заказы",
      link: `/profile/order`,
    },
    {
      title: "Любимые товары",
      link: `/profile/favorite`,
    },
    {
      title: "Выход",
      link: "/",
      onClick: onClickSignOut,
    },
  ];

  return (
    <div className="max-w-[250px] w-full bg-white p-4">
      <div className="flex flex-col gap-3">
        {list.map((item, index) => (
          <Link href={item.link} key={index}>
            <button onClick={item.onClick} key={index}>
              {item.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

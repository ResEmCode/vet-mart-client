import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import styles from "./ProfileSidebar.module.css";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { Heart, LogOut, PackageOpen, User } from "lucide-react";

export const ProfileSidebar = () => {
  const { data } = useSession();

  const params = useParams();

  const pathname = usePathname();

  const onClickSignOut = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  const list = [
    {
      title: "Персональные данные",
      link: `/profile/personal-data`,
      icon:<User />
    },
    {
      title: "Мои заказы",
      link: `/profile/order`,
      icon: <PackageOpen />
    },
    {
      title: "Любимые товары",
      link: `/profile/favorite`,
      icon: <Heart />
    },
  ];

  return (
    <div className={styles.inner}>
      <div className="flex flex-col">
        {list.map((item, index) => (
          <Link href={item.link} key={index} className={cn(styles.link, { [styles.active]: item.link === pathname })}>
            {item.icon}
            {item.title}
          </Link>
        ))}
        <button className={cn(styles.link)} onClick={onClickSignOut}>
          <LogOut />
          Выход
        </button>
      </div>
    </div>
  );
};

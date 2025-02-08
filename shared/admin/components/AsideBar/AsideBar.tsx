"use client";

import Link from "next/link";
import styles from "./AsideBar.module.css";
import { cn } from "@/shared/lib/utils";
import { usePathname } from "next/navigation";

export const AsideBar = () => {
  const pathname = usePathname();
  const arrayList = [
    {
      title: "Товары",
      href: "/admin/products",
    },
    {
      title: "Фильтрация",
      href: "/admin/filters",
    },
    {
      title: "Пользователи",
      href: "/admin/users",
    },
    {
      title: "Медиафайлы",
      href: "/admin/media",
    },
  ];

  return (
    <ul className="max-w-[320px] w-full bg-white py-[20px] ">
      {arrayList.map((item, index) => (
        <li className="w-full" key={index}>
          <Link href={item.href} className={cn(styles.link, pathname === item.href && styles.active)}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

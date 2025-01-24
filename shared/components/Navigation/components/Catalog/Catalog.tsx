import styles from "./Catalog.module.css";
import { CartSvg, LikeSvg, ProfileSvg } from "@/shared/ui/icons";
import { Drawer, Modal } from "@/shared/ui/custom";
import { AuthForm } from "@/shared/components/Auth/AuthForm";
import { useAuthModal, useCartDrawer } from "../../store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Cart } from "@/shared/components/Cart/Cart";
import { useState } from "react";

export const Catalog = () => {
  const { isAuthOpen, setIsAuthOpen } = useAuthModal();
  const setIsDrawerOpen = useCartDrawer((state) => state.setIsDrawerOpen);
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const onClickAuth = () => {
    setIsAuthOpen(true);
  };

  return (
    <>
      <div className={styles.catalog}>
        <button className={styles.button} onClick={() => setIsDrawerOpen(true)}>
          <CartSvg className={styles.icon} />
        </button>
        <Link href="/profile/favorite" className={styles.button}>
          <LikeSvg className={styles.icon} />
        </Link>
        {session.data ? (
          <Link href={`/profile/personal-data`} className={styles.button}>
            <img src={"/images/user/image.png"} alt="profile" className="rounded-full w-[46px] h-[46px] object-cover" />
          </Link>
        ) : (
          <button className={styles.button} onClick={onClickAuth}>
            <ProfileSvg className={styles.icon} />
          </button>
        )}
        <button className={styles.burger} onClick={() => setIsOpen(true)}>
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>

        <Modal closeModal={() => setIsAuthOpen(false)} isOpen={isAuthOpen}>
          <AuthForm />
        </Modal>
        <Cart />
        <Drawer title="Меню" isOpen={isOpen} closeDrawer={() => setIsOpen(false)}>
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-bold">Навигация</span>
              <ul onClick={() => setIsOpen(false)} className="w-max">
                <li>
                  <Link href="/about">О нас</Link>
                </li>
                <li>
                  <Link href="/payment">Оплата и доставка</Link>
                </li>
                <li>
                  <Link href="/return">Возврат и обмен</Link>
                </li>
                <li>
                  <Link href="/contacts">Контакты</Link>
                </li>
                <li>
                  <Link href="/news">Новости</Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Продукты</span>
              <ul onClick={() => setIsOpen(false)} className="w-max">
                <li>
                  <Link href={{ pathname: "/category", query: { type: "cats" } }}>Кошки</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/category", query: { type: "dogs" } }}>Собаки</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/category", query: { type: "birds" } }}>Птицы</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/category", query: { type: "rodents" } }}>Грызуны</Link>
                </li>
              </ul>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

import { Drawer, Typography } from "@/shared/ui/custom";
import { useCartDrawer } from "../Navigation/store";

import { Button } from "@/shared/ui/shadcn";
import styles from "./Cart.module.css";
import { useCart } from "@/shared/store";
import Link from "next/link";
import Image from "next/image";
import { CartCard } from "./components/CartCard/CartCard";
import { CartEmpty } from "./components/CartEmpty/CartEmpty";

export const Cart = () => {
  const { isDarwerOpen, setIsDrawerOpen } = useCartDrawer();
  const cart = useCart((state) => state.cart);
  return (
    <Drawer isOpen={isDarwerOpen} closeDrawer={() => setIsDrawerOpen(false)} title="Корзина" direction="right">
      {cart.length > 0 ? (
        <div className="h-[90vh] flex flex-col justify-between">
          {/* {cart.length === 0 && <span className="text-center text-xl mt-20">Корзина пустая</span>} */}
          <ul className={styles.cards}>
            {/* <CartCard oldPrice="200" price="160" title="Корм для кошек" weight="9кг" /> */}
            {cart?.map((item) => <CartCard key={item.id} {...item} />)}
          </ul>
          <Link href={"/cart"}>
            <Button variant={"default"} className="rounded-[6px] w-full" disabled={cart.length === 0} onClick={() => setIsDrawerOpen(false)}>
              Оформить заказ
            </Button>
          </Link>
        </div>
      ) : (
        <CartEmpty />
      )}
    </Drawer>
  );
};

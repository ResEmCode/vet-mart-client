import { Drawer, Typography } from "@/shared/ui/custom";
import { useCartDrawer } from "../Navigation/store";
import { CartCard } from "./components/CartCard";
import { Button } from "@/shared/ui/shadcn";
import styles from "./Cart.module.css";
import { useCart } from "@/shared/store";
import Link from "next/link";
import Image from "next/image";

export const Cart = () => {
  const { isDarwerOpen, setIsDrawerOpen } = useCartDrawer();
  const cart = useCart((state) => state.cart);
  return (
    <Drawer isOpen={isDarwerOpen} closeDrawer={() => setIsDrawerOpen(false)} title="Корзина">
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
        <div className="h-[90vh] flex flex-col justify-center items-center gap-4">
          <Image src={"/images/cart/empty.png"} alt="emptyCart" width={100} height={100} />
          <div className="flex flex-col items-center gap-2">
            <Typography variant="title24_semibold" tag="h2">
              Корзина пустая
            </Typography>
            <Typography color="subtitle" variant="paragraph16_medium" tag="p">
              Добавьте товар в корзину чтобы оформить заказ
            </Typography>
          </div>

          <Button onClick={() => setIsDrawerOpen(false)} variant={"default"} className="rounded-[6px] w-full">
            Вернуться назад
          </Button>
        </div>
      )}
    </Drawer>
  );
};

import { Drawer } from "@/shared/ui/custom";
import { useCartDrawer } from "../Navigation/store";
import { CartCard } from "./components/CartCard";
import { Button } from "@/shared/ui/shadcn";
import styles from "./Cart.module.css";
import { useCart } from "@/shared/store";

export const Cart = () => {
  const { isDarwerOpen, setIsDrawerOpen } = useCartDrawer();
  const cart = useCart((state) => state.cart);
  return (
    <Drawer isOpen={isDarwerOpen} closeDrawer={() => setIsDrawerOpen(false)} title="Корзина">
      <div className="h-[90vh] flex flex-col justify-between">
        <ul className={styles.cards}>
          {/* <CartCard oldPrice="200" price="160" title="Корм для кошек" weight="9кг" /> */}
          {cart?.map((item) => <CartCard key={item.id} {...item} />)}
        </ul>
        <Button variant={"default"} className="rounded-[6px] w-full">
          Оформить заказ
        </Button>
      </div>
    </Drawer>
  );
};

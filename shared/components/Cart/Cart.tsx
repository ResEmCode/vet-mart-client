import { Drawer } from "@/shared/ui/custom";
import { useCartDrawer } from "../Navigation/store";
import { CartCard } from "./components/CartCard";

export const Cart = () => {
  const { isDarwerOpen, setIsDrawerOpen } = useCartDrawer();

  return (
    <Drawer isOpen={isDarwerOpen} closeDrawer={() => setIsDrawerOpen(false)} title="Корзина">
      <ul>
        <CartCard oldPrice="200" price="160" title="Корм для кошек" weight="9кг" />
      </ul>
    </Drawer>
  );
};

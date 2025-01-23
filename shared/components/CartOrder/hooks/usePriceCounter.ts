import { useCart } from "@/shared/store";

export const usePriceCounter = () => {
  const cart = useCart((state) => state.cart);

  const price = cart.reduce((acc, item) => acc + Number(item.price) * item.count, 0);

  const discount = (price * 0.01).toFixed(2);

  const totalPrice = (price - Number(discount)).toFixed(2);

  return { price, discount, totalPrice };
};

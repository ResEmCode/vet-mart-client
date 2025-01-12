import styles from "./Catalog.module.css";
import { CartSvg, LikeSvg, ProfileSvg } from "@/shared/ui/icons";
import { Modal } from "@/shared/ui/custom";
import { AuthForm } from "@/shared/components/Auth/AuthForm";
import { useAuthModal, useCartDrawer } from "../../store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Cart } from "@/shared/components/Cart/Cart";

export const Catalog = () => {
  const { isAuthOpen, setIsAuthOpen } = useAuthModal();
  const setIsDrawerOpen = useCartDrawer((state) => state.setIsDrawerOpen);
  const session = useSession();

  const onClickAuth = () => {
    setIsAuthOpen(true);
  };

  return (
    <div className="flex gap-2 ml-[35px]">
      <button className={styles.button} onClick={() => setIsDrawerOpen(true)}>
        <CartSvg className={styles.icon} />
      </button>
      <Link href="/favorites" className={styles.button}>
        <LikeSvg className={styles.icon} />
      </Link>
      {session.data ? (
        <Link href={`/profile/${session.data.user.id}`} className="rounded-full">
          <img src={session.data.user.image ?? "/user/image.png"} alt="profile" className="rounded-full w-[46px] h-[46px] object-cover" />
        </Link>
      ) : (
        <button className={styles.button} onClick={onClickAuth}>
          <ProfileSvg className={styles.icon} />
        </button>
      )}

      <Modal closeModal={() => setIsAuthOpen(false)} isOpen={isAuthOpen}>
        <AuthForm />
      </Modal>
      <Cart />
    </div>
  );
};

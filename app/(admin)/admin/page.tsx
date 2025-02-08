"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Ждем, пока загрузится сессия

    if (!session || session.user.role !== "ADMIN") {
      router.push("/"); // Редирект на главную страницу, если пользователь не админ
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Загрузка...</div>; // Показать загрузку, пока сессия загружается
  }

  return (
    <div>
      <div>Приветствуем вас, Админ!</div>
    </div>
  );
};

export default AdminPage;

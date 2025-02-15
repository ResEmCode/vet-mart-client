import React from "react";
import { useForm } from "react-hook-form";
import Toaster from "react-hot-toast";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import type { PersonalForm } from "@/shared/components/ProfileSidebar/constants/PersonalSchema";
import { PersonalSchema } from "@/shared/components/ProfileSidebar/constants/PersonalSchema";

export const useChangeData = () => {
  const [open, setOpen] = React.useState(true);
  const { data: session, update } = useSession();

  const form = useForm<PersonalForm>({
    resolver: zodResolver(PersonalSchema),
    mode: "onSubmit",
    values: {
      fullName: session?.user.name ?? "",
      email: session?.user.email ?? "",
    },
  });

  console.log(session);

  function handleClose(prev: boolean) {
    setOpen(!prev);
  }

  async function handleSubmit(data: PersonalForm) {
    const result = PersonalSchema.safeParse(data);

    if (!result.success) {
      Toaster.error("Ошибка валидации данных");
      return;
    }

    try {
      const response = await axios.post("/api/user/", {
        fullName: data.fullName,
        id: session?.user.id,
      });

      if (update) {
        await update({
          user: {
            ...session?.user,
            name: response.data.fullName,
          },
        });
      }

      Toaster.success("Данные успешно обновлены!");

      console.log("Данные обновлены:", response.data);
    } catch (error) {
      console.error("Ошибка обновления:", error);

      Toaster.error("Ошибка при обновлении данных");
    }
  }

  return {
    open,
    form,
    handleClose,
    handleSubmit,
  };
};

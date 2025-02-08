import React from "react";
import { useForm } from "react-hook-form";
import Toaster from "react-hot-toast";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";

import type { PersonalForm } from "@/shared/components/ProfileSidebar/constants/PersonalSchema";
import { PersonalSchema } from "@/shared/components/ProfileSidebar/constants/PersonalSchema";
import type { PhoneVerificationSchemaTypes } from "@/shared/components/ProfileSidebar/constants/PhoneVerificationSchema";
import { phoneVerificationSchema } from "@/shared/components/ProfileSidebar/constants/PhoneVerificationSchema";

export const useChangeData = () => {
  const [open, setOpen] = React.useState(true);

  const { data } = useSession();

  const form = useForm<PersonalForm>({
    resolver: zodResolver(PersonalSchema),
    mode: "onSubmit",
    values: {
      fullName: data?.user.name ?? "",
      email: data?.user.email ?? "",
    },
  });

  const phone = useForm<PhoneVerificationSchemaTypes>({
    resolver: zodResolver(phoneVerificationSchema),
    mode: "onSubmit",
  });

  function handleClose(prev: boolean) {
    setOpen(!prev);
  }

  function handleSubmit(data: PersonalForm) {
    const result = PersonalSchema.safeParse(data);

    if (result.success) {
      console.log(result.data, "success");
    } else {
      console.log(result.error, "error");
    }

    setOpen(true);

    Toaster.success("Данные успешно обновлены");
  }
  return {
    open,
    form,
    handleClose,
    handleSubmit,
    phone,
  };
};

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { recoveryPassword } from "@/app/actions";
import { Button } from "@/shared/ui";
import { InputLabel } from "@/shared/ui/InputLabel/input-label";

import { useModalAuth } from "../../store";

interface EmailSchemaTypes {
  email: string;
}

export const RecoveryPswForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailSchemaTypes>({
    resolver: zodResolver(z.object({ email: z.string().email() })),
  });
  const setIsAuthOpen = useModalAuth((state) => state.setIsAuthOpen);

  const onSubmit = async (values: EmailSchemaTypes) => {
    try {
      await recoveryPassword(values.email);
      setIsAuthOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="max-w-80" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-[32px] font-[500] leading-[38.73px] text-black mb-6">Введите свою почту</h2>
      <div className="flex flex-col gap-4">
        <InputLabel text="E-mail" type="email" placeholder="E-mail" {...register("email")} error={errors.email?.message} />
        <Button>Отправить код востановления</Button>
      </div>
    </form>
  );
};

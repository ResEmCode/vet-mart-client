"use client";

import React from "react";

import { Container, InputLabel, Typography } from "@/shared/ui/custom";
import { Button } from "@/shared/ui/shadcn";

import { useChangeData } from "./hooks/useChangeData";

const PersonalPage = () => {
  const { form, phone, handleClose, handleSubmit, open } = useChangeData();

  return (
    <Container>
      <Typography variant="title48_semibold" tag="h2" className="mb-4">
        Мой кабинет
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="bg-white px-6 py-4 flex flex-col gap-[50px]">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3 max-w-[380px] w-full">
              <InputLabel variant={open ? "none" : "default"} text="ФИО" disabled={open} {...form.register("fullName")} />
              <InputLabel
                variant={open ? "none" : "default"}
                text="Почта"
                disabled={open}
                error={form.formState.errors.email?.message}
                {...form.register("email")}
              />
              <div className="flex flex-col gap-3">
                <InputLabel
                  variant={open ? "none" : "default"}
                  text="Номер телефона"
                  placeholder="+38 (000) 000-00-00"
                  error={phone.formState.errors.phone?.message}
                  {...phone.register("phone")}
                />
                <Button type="button">Подтвердить номер телефона</Button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button disabled={open} type="submit" size="lg">
              Сохранить
            </Button>
            <Button type="button" onClick={() => handleClose(open)} variant="link" size="lg">
              {open ? "Редактировать" : "Закрыть"}
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default PersonalPage;

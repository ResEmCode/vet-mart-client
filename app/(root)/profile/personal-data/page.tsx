"use client";

import React from "react";

import { Container, InputLabel, Typography } from "@/shared/ui/custom";
import { Button } from "@/shared/ui/shadcn";

import { useChangeData } from "./hooks/useChangeData";

const PersonalPage = () => {
  const { form, handleClose, handleSubmit, open } = useChangeData();

  return (
    <Container>
      <Typography variant="title48_semibold" tag="h2" className="mb-4">
        Мой кабинет
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="bg-white px-6 py-4 flex flex-col gap-4">
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
              {/* <InputLabel text="Номер телефона" error={form.formState.errors.phone?.message} {...form.register("phone")} /> */}
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

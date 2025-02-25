"use client";

import { Typography } from "@/shared/ui/custom";
import { Button, Modal } from "@/shared/ui/shadcn";
import { ChangeEvent, useRef, useState } from "react";
import styles from "./ModalLoadFile.module.css";
import { setProductsByFile } from "@/server/actions/setProductsByFile";

interface ModalLoadFileProps {
  isOpen: boolean;
  onClose: (state: boolean) => void;
}

export const ModalLoadFile = ({ isOpen, onClose }: ModalLoadFileProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const onLoadFile = () => {
    fileRef.current?.click();
  };

  const onSaveFile = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      }).then((res) => {
        const name = file.name;

        setProductsByFile(name);
      });
    }
  };

  return (
    <Modal closeModal={() => onClose(false)} isOpen={isOpen} classNameBody="max-w-[460px]">
      <div>
        <Typography tag="h2" variant="title18_semibold" className="mb-[40px]">
          Загрузите данные из Excel:
        </Typography>
        <div className="flex flex-col gap-[20px]">
          <div>
            <div>
              Имя файла: <span>{file?.name ? file.name : "---"}</span>
            </div>
            <div>
              Вес файла: <span>{file?.size ? Math.floor(Number(file?.size) / 1024) : 0} кб</span>
            </div>
          </div>
          <input ref={fileRef} type="file" accept=".xlsx" onChange={(e) => handleChange(e)} className={styles.input} />
          <Button onClick={onLoadFile} variant={"outline"}>
            Загрузить файл
          </Button>
          <Button variant={"default"} disabled={file ? false : true} onClick={onSaveFile}>
            Сохранить
          </Button>
        </div>
      </div>
    </Modal>
  );
};

"use client";

import { ImageDown } from "lucide-react";
import styles from "./MediaUploadCard.module.css";
import { ChangeEvent, useRef, useState } from "react";
import { MediaForm } from "../MediaForm/MediaForm";

export const MediaUploadCard = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [objectURL, setObjectURL] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      const objectURL = URL.createObjectURL(files[0]);
      setObjectURL(objectURL);
    }
  };

  const onLoadFile = () => {
    fileRef.current?.click();
    setIsOpen(true);
  };

  return (
    <>
      <input ref={fileRef} type="file" accept=".png, .jpg, .jpeg" className={styles.input} onChange={(e) => handleChange(e)} />
      <button className={styles.card} onClick={onLoadFile}>
        <span></span>

        <ImageDown className={styles.icon} />
      </button>

      {isOpen && <MediaForm isOpen={isOpen} setIsOpen={setIsOpen} urlImage={objectURL} />}
    </>
  );
};

import { Button, Modal } from "@/shared/ui/shadcn";
// import styles from "./MediaForm.module.css";
import { InputLabel } from "@/shared/ui/custom";


interface MediaFormProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  urlImage: string | null;
}

export const MediaForm = ({ isOpen, setIsOpen, urlImage }: MediaFormProps) => {
  return (
    <Modal closeModal={() => setIsOpen(false)} isOpen={isOpen} classNameBody="max-w-[420px]">
      {urlImage ? <img src={urlImage} alt="Selected" className="w-full h-[220px] object-cover mb-[20px]" /> : <span></span>}
      <form className="flex flex-col gap-[20px]">
        <InputLabel text="Название для картинки" placeholder="Ваше название..." />
        <Button variant={"default"} className="w-full rounded-[6px]">
          Сохранить картинку
        </Button>
      </form>
    </Modal>
  );
};

import { Button } from "@/shared/ui/shadcn";

const FiltersPage = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[12px]">
        <h2>Категории:</h2>
        <ul className="flex gap-[12px] flex-wrap">
          <li>Кошки</li>
          <li>Собаки</li>
          <li>Птицы</li>
          <li>Грызуны</li>
        </ul>
        <Button className="max-w-[220px]" variant="outline">
          Добавить категорию
        </Button>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h2>Фильтрации:</h2>
        <div>
          <h3>Корма</h3>
          <ul className="flex flex-col">
            <li>Кошки</li>
            <li>Собаки</li>
            <li>Птицы</li>
            <li>Грызуны</li>
          </ul>
        </div>
        <Button className="max-w-[220px]" variant="outline">
          Добавить блок
        </Button>
      </div>
    </div>
  );
};

export default FiltersPage;

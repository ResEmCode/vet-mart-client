import { MediaImgCard, MediaUploadCard } from "@/shared/admin/components";
import { Typography } from "@/shared/ui/custom";
import { Button } from "@/shared/ui/shadcn";

const MediaPage = () => {
  return (
    <div>
      <Typography tag="h1" variant="paragraph16_medium" className="mb-[20px]">
        Медиа
      </Typography>
      <div className="mb-[20px]">
        <Button variant="active">Фотографии</Button>
      </div>
      <ul className="flex gap-6">
        <MediaImgCard />
        <MediaUploadCard />
      </ul>
    </div>
  );
};

export default MediaPage;

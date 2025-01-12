import Link from "next/link";

import { Container, Typography } from "@/shared/ui/custom";
import { ROUTES } from "@/shared/utils/constants";

const NotFound = () => {
  return (
    <Container>
      <div className="text-center w-full">
        <Typography variant="title48_semibold" tag="h1" className="mb-[30px]">
          404
        </Typography>
        <Link href={ROUTES.MAIN} className="underline">
          Вернуться на главную
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;

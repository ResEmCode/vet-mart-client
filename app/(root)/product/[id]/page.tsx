import { CharacteristicsProduct, ProductBuyMenu, ProductDetails, ProductSlider } from "@/shared/components";
import { Container, Typography } from "@/shared/ui/custom";

import styles from "./page.module.css";

import type { ResponseProductPage } from "@/@types";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    article: string;
  }>;
}

const ProductPage = async ({ params, searchParams }: ProductPageProps) => {
  const { id } = await params;
  const { article } = await searchParams;

  const data: ResponseProductPage = await fetch(`http://localhost:3000/api/products/${id}`)
    .then((res) => res.json())
    .then((res) => res);

  if (!data) return null;

  const activeVariant = data?.variants?.find((variant) => variant.article === Number(article)) || null;

  return (
    <Container>
      <div>
        <Typography variant="title48_semibold" tag="h1" className="mb-16">
          {data.name}
        </Typography>
        <div>
          <div className={styles.row}>
            <ProductSlider images={data.images} />
            {activeVariant && <ProductBuyMenu title={data.name} variants={data.variants} id={Number(id)} activeVariant={activeVariant} />}
          </div>
          <div className={styles.info}>
            <ProductDetails desc={data.description} />
            <div className="flex flex-col gap-4 max-w-[310px] w-full">
              {activeVariant && <CharacteristicsProduct activeVariant={activeVariant} country={data.country} productType={data.productType} />}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
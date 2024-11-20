
import "./globals.css";

import { BrendsSection, Container, DiscountedProducts, PopularCategory, Navigation } from "@/components/shared";
import { productsData } from "@/components/shared/DiscountedProducts/DiscountedProducts.data";

export const revalidate = 0;
export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams?: Promise<{ product: ProductsMenu }>;
}

const Home = async ({ searchParams }: HomeProps) => {
  const filter = await searchParams;
  const productQuery = filter?.product ?? "all";
  const productItem = productsData.find((product) => product.query === productQuery)!;


  return (
    <>
      <Container>
        <Navigation />
        <PopularCategory />
        <DiscountedProducts product={productItem} />
      </Container>
      <BrendsSection />
    </>
  );
};

export default Home;

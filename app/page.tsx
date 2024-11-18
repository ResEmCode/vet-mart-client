import { BrendsSection, Container, DiscountedProducts, PopularCategory } from "@/components/shared";

interface HomeProps {
  searchParams: Promise<{ product: ProductsMenu }>;
}

const Home = async ({ searchParams }: HomeProps) => {
  const productQuery = await searchParams;

  return (
    <Container>
      <PopularCategory />
      <DiscountedProducts product={productQuery.product ?? "all"} />
      <BrendsSection />
    </Container>
  );
};

export default Home;

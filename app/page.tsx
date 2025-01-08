import { About, Advantages, BrendsSection, Container, DiscountedProducts, Header, PopularCategory, ProductDetails, Reviews } from "@/shared/components";
import { productsData } from "@/shared/components/DiscountedProducts/DiscountedProducts.data";

export const revalidate = 0;
export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams?: Promise<{ product: ProductsMenu; verify?: string }>;
}

const Home = async ({ searchParams }: HomeProps) => {
  const filter = await searchParams;
  const productQuery = filter?.product ?? "all";
  const productItem = productsData.find((product) => product.query === productQuery)!;
  return (
    <>
      <Header />
      <PopularCategory />
      <DiscountedProducts product={productItem} />

      <BrendsSection />
      <Container>
        <Advantages />
        <Reviews />
        <About />
        <ProductDetails />
      </Container>
    </>
  );
};

export default Home;

import { About, Advantages, BrendsSection, Container, DiscountedProducts, Header, Navigation, PopularCategory, Reviews } from "@/components/shared";
import { productsData } from "@/components/shared/DiscountedProducts/DiscountedProducts.data";
import Footer from "@/components/shared/Footer/Footer";

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
        <Header />
        <PopularCategory />
        <DiscountedProducts product={productItem} />
      </Container>
      <BrendsSection />
      <Container>
        <Advantages />
        <Reviews />
        <About />
      </Container>
      <Footer />
    </>
  );
};

export default Home;

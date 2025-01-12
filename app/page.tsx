import { About, Advantages, BrendsSection, DiscountedProducts, Information, PopularCategory, Reviews } from "@/shared/components";
import { Container } from "@/shared/ui/custom";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Home = () => {
  return (
    <>
      <Container className="my-[20px]">
        <Information />
        <PopularCategory />
        <DiscountedProducts />
      </Container>
      <BrendsSection />

      <Container className="my-[20px]">
        <Advantages />
        <Reviews />
        <About />
      </Container>
    </>
  );
};

export default Home;

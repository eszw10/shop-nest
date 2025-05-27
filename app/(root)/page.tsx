import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Home",
};

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// const HomePage = async () => {
// await delay(3000);
const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
  );
};

export default HomePage;

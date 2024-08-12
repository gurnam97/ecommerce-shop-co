import { ClientsComponent } from "../ClientsComponent";
import { clientLogos } from "../ClientsComponent/__fixtures__";
import { HomeBanner } from "../HomeBanner";
import { ProductListing } from "../ProductListing";
import { products } from "../ProductListing/__fixtures__";
import { ShopByCategory } from "../ShopByCategory";
import { shopByCategoryData } from "../ShopByCategory/__fixtures__";

export const Homepage = () => {
  return (
    <>
      <HomeBanner />
      <ClientsComponent logos={clientLogos} />
      <ProductListing products={products} category="New Arrivals" border />
      <ProductListing products={products} category="Top Selling" />
      <ShopByCategory categoryData={shopByCategoryData}/>
    </>
  );
};

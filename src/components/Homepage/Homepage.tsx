import { ClientsComponent } from "../ClientsComponent";
import { clientLogos } from "../ClientsComponent/__fixtures__";
import { HomeBanner } from "../HomeBanner";
import { ProductListing } from "../ProductListing";
import { products } from "../ProductListing/__fixtures__";
import { ReviewCarousel } from "../ReviewCarousel";
import { reviews } from "../ReviewCarousel/__fixtures__";
import { ShopByCategory } from "../ShopByCategory";
import { shopByCategoryData } from "../ShopByCategory/__fixtures__";
import { NEW_ARRIVALS, TOP_SELLING } from "./constants";

export const Homepage = () => {
  return (
    <>
      <HomeBanner />
      <ClientsComponent logos={clientLogos} />
      <ProductListing products={products} category={NEW_ARRIVALS} border />
      <ProductListing products={products} category={TOP_SELLING} />
      <ShopByCategory categoryData={shopByCategoryData} />
      <ReviewCarousel reviews={reviews} />
    </>
  );
};

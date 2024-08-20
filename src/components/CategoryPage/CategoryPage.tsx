import { CategoryHeader } from "../CategoryHeader/CategoryHeader";
import { Container } from "../Container";
import { ProductListing } from "../ProductListing";
import { productsPLP } from "../ProductListing/__fixtures__";

export const CategoryPage = () => {
  return (
    <Container>
      <div className="flex flex-wrap py-8">
        <div className="w-1/5 p-3">Filters</div>
        <div className="w-4/5 p-3">
          <CategoryHeader />
          <ProductListing products={productsPLP} type="PLP" />
        </div>
      </div>
    </Container>
  );
};

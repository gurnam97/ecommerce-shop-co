import { Breadcrumbs } from "../Breadcrumbs";
import { CategoryHeader } from "../CategoryHeader/CategoryHeader";
import { CategoyFilters } from "../CategoyFilters/CategoyFilters";
import { Container } from "../Container";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";
import { ProductListing } from "../ProductListing";
import { productsPLP } from "../ProductListing/__fixtures__";

export const CategoryPage = () => {
  return (
    <Container>
      <Breadcrumbs />
      <div className="grid grid-cols-[1.5fr_5fr] gap-6">
        <div>
          <CategoyFilters />
        </div>
        <div>
          <CategoryHeader />
          <ProductListing products={productsPLP} type="PLP" />
          <div className="pt-9 border-t mt-9">
            <PaginationComponent />
          </div>
        </div>
      </div>
    </Container>
  );
};

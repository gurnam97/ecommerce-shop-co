import { ProductCard } from "../ProductCard/ProductCard";
import { Button } from "../ui/button";
import { ProductType } from "../ProductCard/types";
import { Container } from "../Container";
import { classNames } from "@/utils/classNames";
import { VIEW_ALL } from "./constants";

export type ProductListProps = {
  /**
   * Add array of products to display on carousel
   */
  products: ProductType[];
  /**
   * Add Category Name
   */
  category: string;
  /**
   * Enables border on bottom
   */
  border?: boolean;
};

export const ProductListing = ({
  products,
  category,
  border,
}: ProductListProps) => {
  return (
    <Container classNames={classNames("py-20", border && "border-b")}>
      <div className="uppercase text-[32px] lg:text-5xl font-black text-center">
        {category}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-14">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <div className="text-center">
        <Button
          className="rounded-full px-20 w-full md:w-auto h-[52px]"
          variant="outline"
        >
          {VIEW_ALL}
        </Button>
      </div>
    </Container>
  );
};

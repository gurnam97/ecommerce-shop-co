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
  category?: string;
  /**
   * Add display type
   */
  type?: "PLP" | "Home";
  /**
   * Enables border on bottom
   */
  border?: boolean;
};

export const ProductListing = ({
  products,
  category,
  border,
  type = "Home",
}: ProductListProps) => {
  return (
    <Container
      classNames={classNames(
        "py-20",
        border && "border-b",
        type === "PLP" && "py-0 lg:w-full px-0"
      )}
    >
      {category ? (
        <div className="uppercase text-[32px] lg:text-5xl font-black text-center">
          {category}
        </div>
      ) : null}
      <div
        className={classNames(
          "grid grid-cols-1 lg:grid-cols-4 gap-6 py-14",
          type === "PLP" && "lg:grid-cols-3 py-0 gap-y-10"
        )}
      >
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      {type === "Home" ? (
        <div className="text-center">
          <Button
            className="rounded-full px-20 w-full md:w-auto h-[52px]"
            variant="outline"
          >
            {VIEW_ALL}
          </Button>
        </div>
      ) : null}
    </Container>
  );
};

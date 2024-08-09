import Image from "next/image";
import { ProductType } from "./types";
import { Breakpoint } from "@/types/breakpoint";
import { Price } from "./Price";
import { Rating } from "./Ratings";
import { classNames } from "@/utils/classNames";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint/useIsBreakpoint";

export interface ProductCardProps {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);

  return (
    <div>
      <Image
        alt="product-image"
        src={product.images[0].url}
        width={isMobile ? 198 : 295}
        height={isMobile ? 200 : 298}
        className="w-full"
      />
      <div
        className={classNames(
          "text-base lg:text-xl font-medium pt-4 text-left",
          isMobile && "text-base"
        )}
      >
        {product.title}
      </div>
      <Rating rating={product.rating} />
      <Price price={product.price} />
    </div>
  );
};

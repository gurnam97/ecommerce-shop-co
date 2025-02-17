import { ColorSwatches } from "../ColorSwatches";
import { colorSwatches } from "./__fixtures__/colorSwatches";
import { sizes } from "./__fixtures__/sizes";
import { CategoryFilter } from "./CategoryFilter";
import { categoryFiltersData } from "./__fixtures__/categoryFilters";
import { SizeFilter } from "../SizeFilter/SizeFilter";

export interface FilterProps {
  type: "category" | "size" | "color";
}

export const Filter = ({ type }: FilterProps) => {
  return (
    <>
      {type === "category" ? (
        <CategoryFilter categoryFiltersData={categoryFiltersData} />
      ) : null}
      {type === "color" ? (
        <ColorSwatches colorSwatches={colorSwatches} />
      ) : null}
      {type === "size" ? <SizeFilter sizes={sizes} /> : null}
    </>
  );
};

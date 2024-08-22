import { ChevronRight } from "lucide-react";
import { Toggle } from "../ui/toggle";

export interface CategoryFilterProps {
  categoryFiltersData: {
    name: string;
  }[];
}

export const CategoryFilter = ({
  categoryFiltersData,
}: CategoryFilterProps) => {
  return (
    <div className="grid">
      {categoryFiltersData.map((filter) => (
        <Toggle
          key={filter.name}
          className="flex justify-between items-center text-[#00000099] !bg-transparent px-0 font-normal"
        >
          <span>{filter.name}</span>
          <ChevronRight className="h-4" />
        </Toggle>
      ))}
    </div>
  );
};

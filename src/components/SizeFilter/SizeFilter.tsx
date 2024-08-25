import { SizeFilterComponent } from "./SizeFilterComponent";

export interface SizeFilterProps {
  sizes: { name: string; isActive: boolean }[];
}

export const SizeFilter = ({ sizes }: SizeFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <SizeFilterComponent
          key={size.name}
          name={size.name}
          isActive={size.isActive}
        />
      ))}
    </div>
  );
};

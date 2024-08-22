import { classNames } from "@/utils/classNames";
import { Toggle } from "../ui/toggle";

export interface SizeFilterProps {
  sizes: { name: string; isActive: boolean }[];
}

export const SizeFilter = ({ sizes }: SizeFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* <div className="flex"> */}
      {sizes.map((size) => (
        <Toggle key={size.name} className="p-0 rounded-full">
          <div
            className={classNames(
              "rounded-full bg-[#F0F0F0] py-2.5 px-5 text-[#00000099]",
              size.isActive && "bg-black text-white"
            )}
          >
            {size.name}
          </div>
        </Toggle>
      ))}
      {/* </div> */}
    </div>
  );
};

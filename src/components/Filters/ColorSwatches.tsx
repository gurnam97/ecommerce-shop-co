import { CheckIcon } from "lucide-react";

export interface ColorSwatchesProps {
  colorSwatches: {
    isActive?: boolean;
    color: string;
  }[];
}

export const ColorSwatches = ({ colorSwatches }: ColorSwatchesProps) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {colorSwatches.map((color) => (
        <div
          key={color.color}
          className="h-9 w-9 bg-[#000] border-2 border-[#00000033] rounded-full flex items-center justify-center"
          style={{ backgroundColor: color.color }}
        >
          {color.isActive ? <CheckIcon className="text-white h-4" /> : null}
        </div>
      ))}
    </div>
  );
};

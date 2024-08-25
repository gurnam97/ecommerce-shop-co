import { ColorSwatchComponent } from "./ColorSwatchComponent";

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
        <ColorSwatchComponent
          color={color.color}
          isActive={color.isActive}
          key={color.color}
        />
      ))}
    </div>
  );
};
